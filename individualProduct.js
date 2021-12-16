console.log("NEw pages")
var count = 1;

var product = JSON.parse(localStorage.getItem("quickViewProduct"));
var cart = JSON.parse(localStorage.getItem("shoppingCart"))||[];

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

var discount = document.createElement("p");
    var x = Math.floor(((product.strikedOffPrice-product.price)/product.strikedOffPrice)*100)
    discount.textContent = x+ "%";
    discount.style.color = "orange";

var description = document.createElement("p");
description.textContent = product.description;

document.querySelector(".img").append(img);
document.querySelector("#desc").append(prodName, description);
document.querySelector("#prices").append(strikedprc, prc, discount);

document.title = product.name;    

document.querySelector("#addToCart").addEventListener("click",function(){
    var qty = count
    var cartobj = {
        image: product.imgUrl,
        product_name: product.name,
        product_price: product.price,
        quantity: qty,
    } 
    cart.push(cartobj);
    localStorage.setItem("shoppingCart",JSON.stringify(cart));
})



document.querySelector("#qtyplus").addEventListener("click",function(){
    count++;
    document.querySelector("#qty").textContent = count;
})
document.querySelector("#qtyminus").addEventListener("click",function(){
    if(count>0){
        count--;
    }
    
    document.querySelector("#qty").textContent = count;
})  
