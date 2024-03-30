import React, { lazy } from "react";
import { motion } from "framer-motion";
import { useMediaQuery, useTheme } from "@material-ui/core";
import Background3d from "../../components/Background3d.js/Background3d";

const Home = lazy(() => import("../../sections/Home"));
const About = lazy(() => import("../../sections/About"));
const Experience = lazy(() => import("../../sections/Experience"));
const Projects = lazy(() => import("../../sections/Projects"));
const Contact = lazy(() => import("../../sections/Contact"));

const MainHome = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Background3d />
    </motion.main>
  );
};

export default MainHome;
