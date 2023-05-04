import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { FaGoogleDrive as DriveIcon } from 'react-icons/fa';
import { MdOutlineWhatsapp as WspIcon } from 'react-icons/md';
import { useNavigate } from "react-router-dom";
//
import lab_data from "../../../data/lab.json";
import "./index.scss";

export default function Header({ profile_logo }) {
  const [scrolled, setScrolled] = useState(0);
  const { scrollYProgress } = useScroll();
  const navigate = useNavigate();

  useEffect(() => {
    scrollYProgress.onChange((latest) => {
      setScrolled(latest);
    });

  }, [scrollYProgress]);

  return (
    <motion.header
      className={scrolled > 0.15 ? 'scrolled-header' : ''}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="header-container">
        <div className="spacer">
          <div className="header-icon">
            <a
              href={lab_data.drive_repo}
              target="_blank"
              rel="noreferrer"
              alt="Google Drive del lab"
            >
              <DriveIcon />
            </a>
          </div>
        </div>

        <div className="spacer">
          <img
            alt="profile logo"
            src={profile_logo}
            onClick={() => navigate('/')}
          />
        </div>

        <div className="spacer">
          <div className="header-icon">
            <a
              href={lab_data.whatsapp_group}
              target="_blank"
              rel="noreferrer"
              alt="Grupo de Whatsapp del lab"
            >
              <WspIcon />
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
