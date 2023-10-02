import mdk from './assets/images/mdk.jpg'
import truewin from './assets/images/truewin.jpg'
import hiba from './assets/images/hiba-exports.jpg'
import lillyPad from './assets/images/lillyPad.png'


const skillsList = [
  { title: "React JS", value: 80 },
  { title: "React Native", value: 80 },
  { title: "JavaScript", value: 80 },
  { title: "TypeScript", value: 75 },
  { title: "Axios", value: 75 },
  { title: "CSS", value: 75 },
  { title: "Redux", value: 70 },
  { title: "Figma", value: 70 },
  { title: "Git", value: 70 },
];
const projectList = [
  {
    id: 1,
    title: "LillyPad CRM",
    technologies: ["React Native", "css", "Redux Toolkit", "Node",'Flipper'],
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
    frontImage:truewin,
    site: "https://truewinecommerce.com/",
  },
  {
    id: 4,
    title: "Hiba Exports",
    technologies: ["html", "Bootstrap", "php", "MySQL"],
    backgroundImage:
      "https://cdn.cbeditz.com/cbeditz/preview/black-red-gradient-background-wallpaper-74-11614352798fbqrv1wpuv.jpg",
    frontImage: hiba,
    site: "https://hibaexportsindia.in/",
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
