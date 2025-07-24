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

function toggleCart(open) {
  const overlay = document.getElementById("overlay");
  const sideCart = document.getElementById("side-cart");

  if (open) {
    overlay.classList.remove("hidden");

    // Hiện side-cart
    sideCart.classList.remove("hidden");
    // Force reflow để kích hoạt transition (nếu cần)
    void sideCart.offsetWidth;
    sideCart.classList.remove("translate-x-full");
  } else {
    overlay.classList.add("hidden");
    sideCart.classList.add("translate-x-full");

    // Sau khi animation xong thì ẩn hẳn
    setTimeout(() => {
      sideCart.classList.add("hidden");
    }, 300);
  }
}

function toggleDarkAndLightMode() {
  const htmlElement = document.documentElement;
  const isDarkMode = htmlElement.classList.contains("dark");

  if (isDarkMode) {
    htmlElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    htmlElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
}
