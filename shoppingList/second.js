const items = document.querySelector(".items");
const input = document.querySelector(".footer__input");
const addBtn = document.querySelector(".footer__button");

function onAdd() {
  const text = input.value;

  if (text === "") {
    alert("상품 이름을 입력해주세요");
    input.focus();
    return;
  }

  const item = createItem(text);
  items.appendChild(item);
  item.scrollIntoView({ block: "center" });
  input.focus();
}

function createItem(text) {
  const item__row = document.createElement("li");
  item__row.setAttribute("class", "item__row");

  const item = document.createElement("div");
  item.setAttribute("class", "item");

  const name = document.createElement("span");
  name.setAttribute("class", "item__name");
  name.innerHTML = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "item__delete");
  deleteBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
  deleteBtn.addEventListener("click", () => {
    items.removeChild(item__row);
  });

  const divider = document.createElement("div");
  divider.setAttribute("class", "item__divider");

  item.appendChild(name);
  item.appendChild(deleteBtn);

  item__row.appendChild(item);
  item__row.appendChild(divider);

  return item__row;
}

addBtn.addEventListener("click", () => {
  if (input.value === "") {
    input.value = "";
    input.focus();
    alert("상품 이름을 입력해주세요");
    return;
  }
  onAdd();
  input.value = "";
  input.focus;
});

input.addEventListener("keydown", (e) => {
  const keyCode = e.keyCode;
  if (keyCode == 13) {
    onAdd();
    input.value = "";
    input.focus();
  }
});
