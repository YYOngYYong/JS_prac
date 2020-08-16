const input = document.querySelector("#item_name");
const addBtn = document.querySelector(".plus");
const itemList = document.querySelector(".item_list");

//Element 추가
function addItem() {
  //1. 사용자가 입력한 데이터를 받아옴
  const text = input.value;
  //2. 새로운 아이템을 만듬 (텍스트 + 삭제버튼)
  const item = createItem(text);

  //3. items 컨테이너 안에 새로 만든 아이템을 추가한다.

  //4. 인풋 초기화
  input.value = "";
  input.focus();
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

  itemRow.innerText = text;

  if (input.value == "") {
    alert("상품 이름을 입력하세요");
  } else {
    item.appendChild(itemRow);
    item.appendChild(deleteBtn);
    itemList.append(item_divider);
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
