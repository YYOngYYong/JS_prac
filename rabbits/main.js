const findBtn = document.querySelector(".find-btn");
const rabbit = document.querySelector(".rabbit");
// const coordinates = rabbit.getBoundingClientRect();

findBtn.addEventListener("click", () => {
  // window.scrollTo(coordinates.x, coordinates.y);
  rabbit.scrollIntoView({ behavior: "smooth", block: "center" });
});
