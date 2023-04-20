import { useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
//
import logo from "../assets/logo.png";
import Header from "./components/Header";
import Footer from "./components/Footer";
  
export default function Layout() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const scrollToTop = () => {
      try {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
      } catch (error) {
        console.log("Error: ", error);
        window.scrollTo(0, 0);
      }
    };

    scrollToTop();
  }, [pathname]);

  const PageAnimationLayout = () => {
    const PageLayout = ({ children }) => children;

    return (
      <PageLayout>
        <Outlet />
      </PageLayout>
    );
  }

  return (
    <main>
      <Header profile_logo={logo} />
      <AnimatePresence mode="wait">
        <PageAnimationLayout key={pathname} />
      </AnimatePresence>
      <Footer />
    </main>
  );
}
