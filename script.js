const d = document;

d.addEventListener("click", (e) => {
  if (e.target.matches(".container-items")) {
    e.target.classList.toggle("other-color");
  }
});
