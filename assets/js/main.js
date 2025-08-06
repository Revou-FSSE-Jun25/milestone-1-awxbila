function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  const body = document.body;

  menu.classList.toggle("active");

  //toggle menu buka tutup dan pengguliran body
  if (menu.classList.contains("active")) {
    body.classList.add("menu-open");
    body.classList.remove("menu-closed");
    const menuHeight = menu.scrollHeight;
    body.style.marginTop = `${menuHeight}px`;
  } else {
    body.classList.remove("menu-open");
    body.classList.add("menu-closed");
    body.style.marginTop = "0";
  }
}

// Auto close menu saat link diklik
document.querySelectorAll("#mobileMenu a").forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("mobileMenu");
    const body = document.body;

    menu.classList.remove("active");
    body.classList.remove("menu-open");
    body.classList.add("menu-closed");
    body.style.marginTop = "0";
  });
});
