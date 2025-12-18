/**
 * @author Alexandra-Maria Mazi @Alex-Mazi|| p3220111@aueb.gr
 * @author Christina Perifana @c-peri || p3220160@aueb.gr
 * 
 * Handles the side menu open and close functionality 
 */

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const sideMenu = document.getElementById("side-menu");
  const overlay  = document.getElementById("overlay");

  if (!menuBtn || !sideMenu || !overlay) return;

  menuBtn.addEventListener("click", () => {
    sideMenu.classList.toggle("active");
    overlay.classList.toggle("active");
    menuBtn.textContent = sideMenu.classList.contains("active") ? "✕" : "☰";
  });

  overlay.addEventListener("click", () => {
    sideMenu.classList.remove("active");
    overlay.classList.remove("active");
    menuBtn.textContent = "☰";
  });
});
