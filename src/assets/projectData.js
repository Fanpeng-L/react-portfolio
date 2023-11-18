import { v4 as uuidv4 } from "uuid";
import githubSearchImg from "../assets/images/github-search.png";
import shoppingCartImg from "../assets/images/shopping-cart.png";

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
];

export default projectData;
