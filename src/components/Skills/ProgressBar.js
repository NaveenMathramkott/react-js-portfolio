import { makeStyles } from "@material-ui/core";
import { motion } from "framer-motion";
import React from "react";

const ProgressBar = ({ value }) => {
  const classes = useStyles({ value });
  return (
    <div className={classes.container}>
      <motion.div
        intial={{ width: "0%" }}
        animate={{ width: `${value}%` }}
        className={classes.progress}
      ></motion.div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "2px",
    backgroundColor: "rgb(60,60,60)",
  },
  progress: {
    // width:"50%",
    height: "2px",
    backgroundColor: theme.palette.progress.main,
  },
}));

export default ProgressBar;
