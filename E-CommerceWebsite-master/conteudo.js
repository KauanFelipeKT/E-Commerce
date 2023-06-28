
function sortItems() {
  var selectElement = document.getElementById("sort-select");
  var sortType = selectElement.value;
  var itemList = document.getElementById("item-list");
  var items = Array.from(itemList.children);

  if (sortType === "alphabetical") {
    items.sort(function(a, b) {
      return a.innerText.localeCompare(b.innerText);
    });
  } else if (sortType === "price") {
    items.sort(function(a, b) {
      var priceA = parseFloat(a.innerText.split(" - R$ ")[1]);
      var priceB = parseFloat(b.innerText.split(" - R$ ")[1]);
      return priceA - priceB;
    });
  }

  items.forEach(function(item) {
    itemList.appendChild(item);
  });
}

function showDetalhes(){
  if (compra === true) {

  } else {
    
  }
}