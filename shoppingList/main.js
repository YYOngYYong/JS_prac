const input = document.querySelector("#item_name");
const addBtn = document.querySelector(".plus");
const itemList = document.querySelector(".item_list");

//Element 추가
function addItem() {
  if (input === null) {
    input.value = " ";
    input.focus();
  } else {
    const text = input.value;
    
    const item = createItem(text);
    item.appendChild(item);
    input.value = "";
    input.focus();
  }

  /
}

function createItem(text) {
  const item = document.createElement("div");
  const itemRow = document.createElement("li");
  const deleteBtn = document.createElement("i");
  const item_divider = document.createElement("div");

  item.setAttribute("class", "items");

  itemList.appendChild(item);

  itemRow.setAttribute("class", "item");
  deleteBtn.setAttribute("class", "fas fa-trash-alt");

  item_divider.setAttribute("class", "item_divider");
  g;
  itemRow.innerText = text;

  if (input.value == "") {
    alert("상품 이름을 입력하세요");
  } else {
    item.appendChild(itemRow);
    item.appendChild(deleteBtn);
    itemList.append(item_divider);
    input.value = "";
    input.focus();
  }

  deleteBtn.addEventListener("click", () => {
    item.removeChild(itemRow);
    item.removeChild(deleteBtn);
    itemList.removeChild(item_divider);
  });

  return itemRow;
}

// 플러스 버튼 클릭 시 요소 추가
addBtn.addEventListener("click", () => {
  addItem();
});
