import "./styles/style.css";
import "./styles/menu.css";
import "./styles/about.css";
import firstLoad from "./functions/firstLoad.js";
import clear from "./functions/clear.js";
import home from "./pages/home";
import about from "./pages/about";
import menu from "./pages/menu";
import nav from "./pages/nav";
import footer from "./pages/footer";

firstLoad();

const homeButton = document.querySelector("a.title");
const menuButton = document.querySelector(".menuButton");
const aboutButton = document.querySelector(".aboutButton");

homeButton.addEventListener("click", () => {
  clear();
  home();
  footer();
});

menuButton.addEventListener("click", () => {
  clear();
  menu();
  footer();
});

aboutButton.addEventListener("click", () => {
  clear();
  about();
  footer();
});
