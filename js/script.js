const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.classList.add("fadeOut");
    setTimeout(() => {
      loader.style.display = "none";
    }, 1000);
  }, 3000);
});

function link(l) {
  window.open(l);
}
