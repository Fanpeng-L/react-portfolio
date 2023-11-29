import { v4 as uuidv4 } from "uuid";
import githubSearchImg from "../assets/images/github-search.png";
import shoppingCartImg from "../assets/images/shopping-cart.png";
import workoutTrackerImg from "../assets/images/Workout-Tracker-MERN.png";

const projectData = [
  {
    id: uuidv4(),
    image: githubSearchImg,
    title: "Github Profile Search",
    demoLink: "https://fanpeng-l.github.io/search-github-profile/",
    codeLink: "https://github.com/Fanpeng-L/search-github-profile",
  },
  {
    id: uuidv4(),
    image: shoppingCartImg,
    title: "Shopping Cart",
    demoLink: "https://shoppingcart-react-fp.netlify.app/",
    codeLink: "https://github.com/Fanpeng-L/simple-shopping-cart",
  },
  {
    id: uuidv4(),
    image: workoutTrackerImg,
    title: "Workout Tracker",
    demoLink: "https://main--workout-track-mern-project.netlify.app/",
    codeLink: "https://github.com/Fanpeng-L/workout-track-mern",
  },
];

export default projectData;
