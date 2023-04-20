import { GrLinkedin } from "react-icons/gr";
import { BsInstagram as InstaIcon, BsGithub as GitHubIcon } from "react-icons/bs";
//
import "./index.scss";

export default function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <section className="footer-rights">
          <span>© Octa Aerospace SpA. Todos los derechos reservados</span>
          <a href="https://github.com/CxrlosKenobi/" target='_blank' rel='noopener noreferrer'>
              <p id="KenobiSignature">
                Desarrollado por Kenobi
              </p>
            <div id="Kenobi" />
          </a>
        </section>
        <section className="footer-rrss">
          <a
            href="https://github.com/Octa-Aerospace/"
            target="_blank" 
            rel="noopener noreferrer" 
            alt="GitHub"
            title="GitHub"
          >
            <GitHubIcon />
          </a>
          <a 
            href="https://www.linkedin.com/company/octa-aerospace/" 
            target="_blank" 
            rel="noopener noreferrer"
            alt="Linkedin"
            title="Linkedin"
          >
            <GrLinkedin />
          </a>
          <a
            href="https://www.instagram.com/octaaerospace/"
            target="_blank" 
            rel="noopener noreferrer"
            alt="Instagram"
            title="Instagram"
          >
            <InstaIcon />
          </a>
        </section>
      </div>
    </footer>
  );
}
