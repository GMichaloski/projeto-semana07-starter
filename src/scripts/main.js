window.onload = (event) => {
  event.preventDefault();
  const links = document.querySelector(".navbar-links");
  const button = document.querySelector(".navbar-burger");

  button.addEventListener("click", function () {
    links.classList.toggle("active");
  });
};
