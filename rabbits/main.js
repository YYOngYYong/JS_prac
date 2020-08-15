const findBtn = document.querySelector(".find-btn");
const rabbit = document.querySelector(".rabbit");
// const coordinates = rabbit.getBoundingClientRect();

findBtn.addEventListener("click", () => {
  // window.scrollTo(coordinates.x, coordinates.y);
  rabbit.scrollIntoView({ behavior: "smooth", block: "center" });
});

function init() {
  let options = {
    series: [{ name: "Series 1", data: [29, 95, 40] }],

    chart: { height: 350, type: "radar" },
  };

  console.log(options.series[0].data);
}

init();
