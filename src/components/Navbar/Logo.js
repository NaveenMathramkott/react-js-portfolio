import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-scroll";
import HomeLogo from "../../assets/images/HomeLogo";

const Logo = ({ setHomeIsActive, ...rest }) => {
  const classes = useStyles();
  return (
    <Link
      spy
      smooth
      duration={500}
      offset={-70}
      to="home"
      onSetActive={() => setHomeIsActive(true)}
      onSetInactive={() => setHomeIsActive(false)}
      className={classes.root}
    >
      <HomeLogo />
    </Link>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    cursor: "pointer",
  },
}));

export default Logo;
