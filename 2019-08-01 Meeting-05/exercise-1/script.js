function addTomato() {
  var shoppingList = document.getElementById("shopping-list");
  var newItem = document.createElement("li");
  newItem.appendChild(document.createTextNode("Tomato"));
  shoppingList.appendChild(newItem);
}
function addItemFromInputField() {
  var shoppingList = document.getElementById("shopping-list");
  
  var itemToAdd = document.getElementById("item-to-add").value;
  alert("item-to-add = " + itemToAdd);

  var newItem = document.createElement("li");
  newItem.appendChild(document.createTextNode(itemToAdd));
  shoppingList.appendChild(newItem);
}