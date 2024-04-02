function openDrop() {
  document.getElementById("menu").style.display = "flex";
  document
    .getElementById("menu-btn")
    .setAttribute("onClick", "javascript: closeDrop();");
  document
    .getElementById("menu-btn__src")
    .setAttribute("src", "../assets/shared/mobile/icon-close.svg");
  document.getElementById("overlay").style.display = "block";
  document.body.style.overflow = "hidden";
}
function closeDrop() {
  document.getElementById("menu").style.display = "none";
  document
    .getElementById("menu-btn")
    .setAttribute("onClick", "javascript: openDrop();");
  document
    .getElementById("menu-btn__src")
    .setAttribute("src", "../assets/shared/mobile/icon-hamburger.svg");
  document.getElementById("overlay").style.display = "none";
  document.body.style.overflow = "auto";
}
