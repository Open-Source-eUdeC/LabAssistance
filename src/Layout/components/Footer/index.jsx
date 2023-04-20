import { BsGithub as GitHubIcon } from "react-icons/bs";
//
import "./index.scss";

export default function Footer(){
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="source-code">
          <a
            href="https://github.com/Open-Source-eUdeC/LabAssistance" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon /> Código fuente
          </a>
        </div>

        <div className="signature">
          <a
            href="https://github.com/CxrlosKenobi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-code"></i>   with   ❤️   by Kenobi
          </a>
        </div>
      </div>
    </footer>
  );
};