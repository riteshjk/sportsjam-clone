console.log("NEw pages")

var product = JSON.parse(localStorage.getItem("quickViewProduct"));

console.log(product)
var prodName = document.createElement("h1");
prodName.textContent = product.name;
var img = document.createElement("img");
img.setAttribute("src",product.imgUrl);

var strikedprc = document.createElement("p");
strikedprc.textContent = product.strikedOffPrice;
strikedprc.style.textDecoration = "line-through";

var prc = document.createElement("p");
prc.textContent = product.price;

// var discount = document.createElement("p");
// discount.textContent = product.discount;

var description = document.createElement("p");
description.textContent = product.description;

document.querySelector(".img").append(img);
document.querySelector(".details").append(prodName, description, strikedprc, prc);

    
    
