import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { IoShareOutline as ShareIcon } from 'react-icons/io5';
import { FaBell as SubscribeIcon } from 'react-icons/fa';
//
import "./index.scss";

export default function Header({ profile_logo }) {
  const [scrolled, setScrolled] = useState(0);
  const { scrollYProgress } = useScroll();

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
            <ShareIcon />
          </div>
        </div>

        <div className="spacer">
          <img src={profile_logo} alt="profile logo" />
        </div>

        <div className="spacer">
          <div className="header-icon">
            <SubscribeIcon />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
