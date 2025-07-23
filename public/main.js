const toMenu = document.querySelector("#mct-top-menu");
const toggleMenu = document.querySelector("#mct-toggle-top-menu");
document.addEventListener("click", (e) => {
  if (toggleMenu.contains(e.target)) {
    // click on toggle menu
    toMenu.classList.toggle("mct-topmenu-expanded");
    toMenu.classList.toggle("hidden");
  } else {
    // outside click
    if (toMenu.classList.contains("mct-topmenu-expanded")) {
      toMenu.classList.remove("mct-topmenu-expanded");
      toMenu.classList.add("hidden");
    }
  }
})