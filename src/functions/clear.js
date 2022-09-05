export default function clear() {
  const mainContent = document.querySelector(".main-content");
  const footer = document.querySelector(".footer");

  mainContent.remove();
  footer.remove();
}
