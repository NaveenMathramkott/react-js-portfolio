import React from "react";
import { motion } from "framer-motion";
import { Typography, makeStyles, Box } from "@material-ui/core";
// import ProgressBar from "./ProgressBar";
// import { skillsList } from "../../data";
import { techStack } from "../../assets/tech";

// function LinearProgressWithLabel({ title, value }) {
//   const classes = useStyles();
//   return (
//     // <div className={classes.skillWrapper}>
//     //   <Typography
//     //     variant="body2"
//     //     display="inline"
//     //     component="span"
//     //     className={classes.skillTitle}
//     //   >
//     //     {title}
//     //   </Typography>
//     {
//       /* <Box display="flex" alignItems="center" mb={2}>
//         <Box width="100%" mr={1}>
//           <ProgressBar value={value} />
//         </Box>
//       </Box> */
//     }
//     // </div>
//   );
// }

const Skills = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {/* {skillsList.map((elem, k) => (
        <LinearProgressWithLabel
          title={elem.title}
          value={elem.value}
          key={k}
        />
      ))} */}
      {techStack.map((elem, k) => (
        <div className={classes.skillWrapper}>
          <motion.img src={elem.name} width={60} height={60} />
          <Typography
            variant="body2"
            display="inline"
            component="span"
            className={classes.skillTitle}
          >
            {elem.tag}
          </Typography>
        </div>
      ))}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "600px",
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
  },
  skillWrapper: {
    width: "auto",
    border: "2px solid #bd3b22",
    padding: 4,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  skillTitle: {
    // whiteSpace: "wrap",
    marginRight: theme.spacing(1),
  },
  paper: {
    marginRight: "10px",
    marginBottom: "10px",
    minWidth: "50px",
    padding: "10px",
  },
}));

export default Skills;
