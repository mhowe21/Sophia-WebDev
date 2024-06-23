let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cartDiv = document.getElementById("cart");

for (let i = 0; i < cart.length; i++) {
  let itemDiv = document.createElement("div");
  itemDiv.textContent = cart[i];

  let removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.onclick = function () {
    removeFromCart(i);
  };

  itemDiv.appendChild(removeButton);
  cartDiv.appendChild(itemDiv);
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}
