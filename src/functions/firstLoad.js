import nav from "../pages/nav";
import footer from "../pages/footer";
import home from "../pages/home";

export default function load() {
  const content = document.querySelector("#content");
  nav();
  home();
  footer();
}
