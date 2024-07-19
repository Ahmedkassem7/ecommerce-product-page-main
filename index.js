let quantity_min = document.querySelectorAll(".min");
let quantity_max = document.querySelectorAll(".max");
let quantity_number = document.querySelector(".quantity-number");

quantity_min.forEach((btn) => {
  btn.addEventListener("click", () => {
    let currentNumber = parseInt(quantity_number.textContent, 10);
    if (currentNumber > 0) {
      quantity_number.textContent = currentNumber - 1;
    }
  });
});

quantity_max.forEach((btn) => {
  btn.addEventListener("click", () => {
    let currentNumber = parseInt(quantity_number.textContent, 10);
    quantity_number.textContent = currentNumber + 1;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const cartIcon = document.getElementById("cartIcon");
  const cartDropdown = document.getElementById("cartDropdown");
  cartIcon.addEventListener("click", () => {
    if (
      cartDropdown.style.display === "none" ||
      cartDropdown.style.display === ""
    ) {
      cartDropdown.style.display = "block";
    } else {
      cartDropdown.style.display = "none";
    }
  });

  document.addEventListener("click", function (event) {
    if (
      !cartIcon.contains(event.target) &&
      !cartDropdown.contains(event.target)
    ) {
      cartDropdown.style.display = "none";
    }
  });
});

const addCart = document.getElementById("myBtn");
const badge = document.getElementById("badge");
const numProduct = document.getElementById("numProduct");
const total = document.getElementById("total");
const removeItem = document.getElementById("removeItem");

let cart_details = document.querySelector(".cart_details");
let cart_body = document.querySelector(".cart_body");
addCart.addEventListener("click", () => {
  let currentNumber = parseInt(quantity_number.textContent);
  if (currentNumber > 0) {
    badge.style.display = "block";
    cart_body.style.display = "none";
    cart_details.style.display = "block";
    badge.innerHTML = currentNumber;
    numProduct.innerHTML = currentNumber;
    total.innerHTML = `$${125 * currentNumber}.00`;
    total.style.fontWeight = "bold";
    total.style.color = "black";
  } else {
    badge.style.display = "none";
    cart_body.style.display = "flex";
    cart_details.style.display = "none";
  }
});
removeItem.addEventListener("click", () => {
  cart_details.style.display = "none";
  badge.style.display = "none";
  quantity_number.innerHTML = "0";
  cart_body.style.display = "flex";
});

// Model
var modal = document.getElementById("myModal");
var images = document.querySelectorAll("img[id^='img']");
var modalImg = document.getElementById("modalImage");

images.forEach((img) => {
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  };
});

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};
