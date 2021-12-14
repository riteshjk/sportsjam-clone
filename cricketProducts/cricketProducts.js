
crickproddata = [
    {
        prodName: "SG Megalite Wicketkeeping Legguards",
        orgPrice: 1600,
        discPrice: 1400,        
        imageUrl:"https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/sgwklgmegalite_1200_1.jpg"

    },{
        prodName: "SG Megalite Wicketkeeping Legguards",
        orgPrice: 1000,
        discPrice: 900,        
        imageUrl:"https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/sgwklgmegalite_1200_1.jpg"

    },{
        prodName: "SG Megalite Wicketkeeping Legguards",
        orgPrice: 2000,
        discPrice: 1500,        
        imageUrl:"https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/sgwklgmegalite_1200_1.jpg"

    },{
        prodName: "SG Megalite Wicketkeeping Legguards",
        orgPrice: 3000,
        discPrice: 2900,        
        imageUrl:"https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/sgwklgmegalite_1200_1.jpg"

    },{
        prodName: "SG Megalite Wicketkeeping Legguards",
        orgPrice: 500,
        discPrice: 400,        
        imageUrl:"https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/sgwklgmegalite_1200_1.jpg"

    },{
        prodName: "SG Megalite Wicketkeeping Legguards",
        orgPrice: 500,
        discPrice: 500,        
        imageUrl:"https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/sgwklgmegalite_1200_1.jpg"

    },{
        prodName: "SG Megalite Wicketkeeping Legguards",
        orgPrice: 1200,
        discPrice: 1000,        
        imageUrl:"https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/sgwklgmegalite_1200_1.jpg"

    },{
        prodName: "SG Megalite Wicketkeeping Legguards",
        orgPrice: 2000,
        discPrice: 1000,        
        imageUrl:"https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/sgwklgmegalite_1200_1.jpg"

    },{
        prodName: "SG Megalite Wicketkeeping Legguards",
        orgPrice: 1999,
        discPrice: 1999,        
        imageUrl:"https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/sgwklgmegalite_1200_1.jpg"

    },{
        prodName: "SG Megalite Wicketkeeping Legguards",
        orgPrice: 3500,
        discPrice: 2500,        
        imageUrl:"https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/sgwklgmegalite_1200_1.jpg"

    },{
        prodName: "SG Megalite Wicketkeeping Legguards",
        orgPrice: 100,
        discPrice: 150,        
        imageUrl:"https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/sgwklgmegalite_1200_1.jpg"

    },{
        prodName: "SG Megalite Wicketkeeping Legguards",
        orgPrice: 850,
        discPrice: 800,        
        imageUrl:"https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/sgwklgmegalite_1200_1.jpg"

    }

]

localStorage.setItem("cricketDatabase",JSON.stringify(crickproddata));

var prodData = JSON.parse(localStorage.getItem("cricketDatabase"))||[];

displayProducts(prodData);

function displayProducts(arr){
    console.log("Entering this")
    document.querySelector(".displayProducts").innerHTML = "";
    arr.map(function(elem){
        var div = document.createElement("div");
        div.setAttribute("class","productDiv");

        var wishlistIcon = document.createElement("img");
        wishlistIcon.setAttribute("src","https://cdn-icons-png.flaticon.com/512/1077/1077035.png")
        wishlistIcon.setAttribute("class","wlIcon")    
        var image = document.createElement("img");
        image.setAttribute("src",elem.imageUrl);
        var prodName = document.createElement("h3");
        prodName.textContent = elem.prodName;
    
        var orgPrice = document.createElement("p");
        orgPrice.textContent = elem.orgPrice;
        orgPrice.style.textDecoration = "line-through";
    
        var discPrice = document.createElement("p");
        discPrice.textContent = elem.discPrice;
    
        var discPercent = document.createElement('p');
        var discount= Math.floor(((elem.orgPrice-elem.discPrice)/elem.orgPrice)*100);
        discPercent.textContent = discount + "% off"
        discPercent.style.color="orange";
        

        div.append(wishlistIcon,image, prodName, orgPrice, discPrice, discPercent);
        document.querySelector(".displayProducts").append(div);       
    })
    document.querySelector("#itemsFound").textContent = "Found "+arr.length + " item(s)";    
}

document.querySelector("#sortBy").addEventListener("change",sortBy);

function sortBy(){
    var val = document.querySelector("#sortBy").value;
    if(val == "priceAsc"){
        prodData.sort(function(a,b){
            return a.discPrice-b.discPrice
        })
    }
    else if(val == "priceDesc"){
        prodData.sort(function(a,b){
            return b.discPrice-a.discPrice
        })
    }
    else if(val == "discount"){
        prodData.sort(function(a,b){
            var x = Math.floor(((a.orgPrice-a.discPrice)/a.orgPrice)*100);
            var y = Math.floor(((b.orgPrice-b.discPrice)/b.orgPrice)*100);
            return y-x;
        })
    }
    displayProducts(prodData);
}

// function flexchange(num){
//     document.querySelector("#productDiv").style.flex = `${num}%`;
// }
