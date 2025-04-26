import "./styles.css";
import loadHome from "./load-home.js";
import loadMenu from "./load-menu.js";
import loadAbout from "./load-about.js";

loadHome();

const homeBtn = document.getElementById("home"); 
const menuBtn = document.getElementById("menu");
const aboutBtn = document.getElementById("about");

homeBtn.addEventListener("click", loadHome);
menuBtn.addEventListener("click", loadMenu);
aboutBtn.addEventListener("click", loadAbout);