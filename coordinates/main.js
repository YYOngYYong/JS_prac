const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");
const target = document.querySelector(".target");
const tag = document.querySelector(".tag");

const rect = target.getBoundingClientRect();
const targetWidh = rect.width / 2;
const targetHeight = rect.height / 2;

document.addEventListener("mousemove", (event) => {
  const x = event.clientX;
  const y = event.clientY;
  horizontal.style.transform = `translateY(${y}px)`;
  vertical.style.transform = `translateX(${x}px)`;
  target.style.transform = `translate(${x - targetWidh}px,${
    y - targetHeight
  }px)`;
  tag.style.transform = `translate(${x}px, ${y}px)`;
  tag.innerHTML = `${x},${y}`;
});
