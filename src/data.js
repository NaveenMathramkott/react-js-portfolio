import mdk from "./assets/images/mdk.jpg";
import truewin from "./assets/images/truewin.jpg";
import hiba from "./assets/images/hiba-exports.jpg";
import lillyPad from "./assets/images/lillyPad.png";
import chatApp from "./assets/images/chat-app.png";
import retroGame from "./assets/images/retro-game.png";
import spencer from "./assets/images/spencer.png";

const skillsList = [
  { title: "React JS", value: 90 },
  { title: "React Native", value: 90 },
  { title: "JavaScript & ES6", value: 88 },
  { title: "State Management", value: 80 },
  { title: "TypeScript", value: 83 },
  { title: "CSS3", value: 90 },
  { title: "HTML5", value: 90 },
  { title: "Git", value: 84 },
  { title: "Node JS", value: 75 },
  { title: "MongoDB", value: 65 },
  { title: "SEO", value: 70 },
  { title: "Testing", value: 75 },
  { title: "Figma", value: 75 },
];
const projectList = [
  {
    id: 1,
    title: "LillyPad CRM",
    technologies: ["React Native", "css", "Redux Toolkit", "Node", "Flipper"],
    backgroundImage:
      "https://cdn.cbeditz.com/cbeditz/preview/black-red-gradient-background-wallpaper-74-11614352798fbqrv1wpuv.jpg",
    frontImage: lillyPad,
    site: "https://play.google.com/store/apps/details?id=co.lilypad.login.crm",
  },
  {
    id: 2,
    title: "MDK & Associates",
    technologies: ["html", "css", "javaScript", "php", "MySQL"],
    backgroundImage:
      "https://cdn.cbeditz.com/cbeditz/preview/black-red-gradient-background-wallpaper-74-11614352798fbqrv1wpuv.jpg",
    frontImage: mdk,
    site: "https://mdkassociates.co.in/",
  },
  {
    id: 3,
    title: "TrueWin Ecommerce",
    technologies: ["React JS", "Bootstrap", "Node Js", "Mongodb"],
    backgroundImage:
      "https://cdn.cbeditz.com/cbeditz/preview/black-red-gradient-background-wallpaper-74-11614352798fbqrv1wpuv.jpg",
    frontImage: truewin,
    site: "https://truewinecommerce.com/",
  },
  {
    id: 4,
    title: "Spencer Fashion Hub",
    technologies: ["Vue JS", "Bootstrap", "PHP", "Laravel"],
    backgroundImage:
      "https://cdn.cbeditz.com/cbeditz/preview/black-red-gradient-background-wallpaper-74-11614352798fbqrv1wpuv.jpg",
    frontImage: spencer,
    site: "https://spencerfashionhub.com/public/",
  },
  {
    id: 5,
    title: "Hiba Exports",
    technologies: ["html", "Bootstrap", "php", "MySQL"],
    backgroundImage:
      "https://cdn.cbeditz.com/cbeditz/preview/black-red-gradient-background-wallpaper-74-11614352798fbqrv1wpuv.jpg",
    frontImage: hiba,
    site: "https://hibaexportsindia.in/",
  },
  {
    id: 6,
    title: "Retro Game",
    technologies: ["html", "css", "JavaScript"],
    backgroundImage:
      "https://cdn.cbeditz.com/cbeditz/preview/black-red-gradient-background-wallpaper-74-11614352798fbqrv1wpuv.jpg",
    frontImage: retroGame,
    site: "https://naveenmathramkott.github.io/Retro_game/",
  },
  {
    id: 7,
    title: "Chat Gram",
    technologies: ["React JS", "chakra UI", "Node JS", "Express JS", "MongoDB"],
    backgroundImage:
      "https://cdn.cbeditz.com/cbeditz/preview/black-red-gradient-background-wallpaper-74-11614352798fbqrv1wpuv.jpg",
    frontImage: chatApp,
    site: "https://chat-gram-phi.vercel.app/",
  },
];

const experienceList = [
  {
    id: 0,
    company: "Zero Pixels",
    links: {
      website: "https://zero-pixels.com/",
      // facebook: "https://www.facebook.com/sysirohubsolutions/",
      // instagram: "https://www.instagram.com/sysirohub_solutions/?hl=en",
    },
  },
  {
    id: 1,
    company: "SysiroHub Solutions Pvt Ltd",
    links: {
      website: "https://sysirohub.com/",
      facebook: "https://www.facebook.com/sysirohubsolutions/",
      instagram: "https://www.instagram.com/sysirohub_solutions/?hl=en",
    },
  },
];

export { skillsList, projectList, experienceList };
