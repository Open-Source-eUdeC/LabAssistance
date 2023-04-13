#!/bin/bash

echo "[ * ] Updating global yarn version to latest v2 (berry)..."
if ! npm install -g yarn; then
  echo "[ ! ] Failed to install yarn globally"
  exit 1
fi
if ! yarn set version berry; then
  echo "[ ! ] Failed to set yarn version to berry"
  exit 1
fi

echo "\n[ * ] Converting npm config files to new format..."
if ! rm -rf .npmrc; then
  echo "[ ! ] Failed to remove .npmrc file"
  exit 1
fi
if ! touch .yarnrc.yml; then
  echo "[ ! ] Failed to create .yarnrc.yml file"
  exit 1
fi

echo "\n[ * ] Configuring nodeLinker in .yarnrc.yml file..."
if ! echo "nodeLinker: node-modules" >> .yarnrc.yml; then
  echo "[ ! ] Failed to add nodeLinker config to .yarnrc.yml file"
  exit 1
fi

echo "\n[ * ] Adding .yarn/cache to .gitignore..."
if ! echo "
.pnp.
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/sdks
!.yarn/versions" >> .gitignore; then
  echo "[ ! ] Failed to add .yarn/cache to .gitignore file"
  exit 1
fi

echo "\n[ * ] Importing yarn plugins..."
if ! yarn plugin import interactive-tools; then
  echo "[ ! ] Failed to import yarn plugins"
  exit 1
fi

echo "\n[ * ] Committing all changes..."
if ! git add .; then
  echo "[ ! ] Failed to stage changes"
  exit 1
fi
if ! git commit -m "Migrate to yarn v2 (berry)"; then
  echo "[ ! ] Failed to commit changes"
  exit 1
fi

echo "\n[ * ] Running yarn install to update the lockfile..."
if ! yarn install; then
  echo "[ ! ] Failed to run yarn install"
  exit 1
fi

echo "\n[ * ] All steps complete!"