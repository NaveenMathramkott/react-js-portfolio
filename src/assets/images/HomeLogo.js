import * as React from "react";
import { useTheme } from "@material-ui/styles";
import { motion } from "framer-motion";
const Logo = (props) => {
  const theme = useTheme();
  return (
    <div
      style={{
        flexDirection: "row",
        display: "flex",
      }}
    >
      <motion.h3
        initial={{ y: -100 }}
        animate={{ y: 0, transition: { delay: 7, type: "spring" } }}
        style={{ color: theme.logoColor }}
      >
        Naveen
      </motion.h3>
      <motion.h3
        initial={{ x: -300 }}
        animate={{ x: 0, transition: { delay: 6, type: "spring" } }}
        style={{ color: theme.logoColor }}
      >
        Mathramkott
      </motion.h3>
    </div>
  );
};

export default Logo;
