import React, { useEffect, useContext } from "react";
import { motion, useAnimation } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";
import loaderContext from "../../contexts/loaderContext";

const Background3d = () => {
  const classes = useStyles();
  const { isLoading } = useContext(loaderContext);
  const controls = useAnimation();

  useEffect(() => {
    if (!isLoading) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: {
          delay: 3,
          type: "spring",
          stiffness: 260,
          damping: 20,
        },
      });
    } else {
      controls.start({ opacity: 0, y: -50 });
    }
  }, [isLoading, controls]);

  return (
    <motion.div animate={controls} className={classes.wrapper}>
      <div className={classes.container}>
        <iframe
          title="background-3d"
          src="https://my.spline.design/untitled-8793f9e5993df5b1f1d2ce42183c1e3f/"
          frameBorder="0"
          height="100%"
          className={classes.iframe}
        ></iframe>
        <div className={classes.hideLogo} />
      </div>
    </motion.div>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    height: "100vh",
    width: "100%",
    overflow: "hidden",
  },
  iframe: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "100%",
    // maxWidth: "600px",
  },
  wrapper: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "100%",
    zIndex: -10,
  },
  hideLogo: {
    position: "absolute",
    right: 20,
    bottom: 0,
    width: "150px",
    height: "60px",
    backgroundColor: theme.palette.background.default,
  },
}));

export default Background3d;
