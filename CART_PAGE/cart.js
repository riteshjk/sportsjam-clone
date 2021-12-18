var arr = JSON.parse(localStorage.getItem("shoppingCart"))
console.log(arr);

// function show(){
//     var k = document.getElementById('discount')
//     var l = document.getElementById('sec')
//     var m = document.getElementById('for')
//     var n = document.getElementById('thr')

// }

var m = document.getElementById('tamount');
var l = document.getElementById('edcAmount');
var j = document.getElementById('gstAmount');
var w = document.getElementById('tcAmount');






function addedtocart(arr){
    var t = document.getElementById('counter');
    var gtotal=0;
    var count = 0;
    var newData = document.getElementById("why")
    newData.textContent = "";
    
    

   

    arr?.map(function(ele,ind){


        var pDiv = document.createElement("div")
        var pDiv2 = document.createElement("div")
        var image = document.createElement('img')
        image.src = ele.image;
        image.setAttribute("class","newImage")
        pDiv2.append(image, ele.product_name)
        pDiv.append(pDiv2)
        pDiv.setAttribute("class","flexBox")
        pDiv2.setAttribute("class","randommarginFlex")                

        // console.log(ele)
        // productName.append(pDiv)

        var uDiv = document.createElement("div")
        var uDiv2 = document.createElement("div")
        uDiv.setAttribute("class","randomO")
        uDiv2.append(ele.product_price)
        uDiv.append(uDiv2)
        uDiv2.setAttribute("class","randommargin")                
        // console.log(ele)
        // unitPrice.append(uDiv)

        var qDiv = document.createElement("div")
        var qDiv2 = document.createElement("div")
        var nbtn=document.createElement("button")
        nbtn.textContent="-"
        nbtn.setAttribute("class","size")
        qDiv.setAttribute("class","randomT")
        var pbtn=document.createElement("button")
        pbtn.textContent="+"
        pbtn.setAttribute("class","size1")


        pbtn.setAttribute("onclick",`increment(${ele.quantity}, ${ind})`)
        nbtn.setAttribute("onclick",`decrement(${ele.quantity}, ${ind})`)
        qDiv2.append(nbtn,ele.quantity,pbtn)
        qDiv.append(qDiv2)
        qDiv2.setAttribute("class","randommargin")                
        count += ele.quantity; 
        t.innerHTML=count;
        if(count >= 1){
            t.style.display="inherit"
        }
        // console.log(ele)
        // Quantity.append(qDiv)

        var tDiv = document.createElement("div")
        var tDiv2 = document.createElement("div")
        tDiv.setAttribute("class","randomTh")
        var tot = `${ele.quantity * ele.product_price}`
        gtotal+= +tot
        tDiv2.innerHTML = tot
        tDiv.append(tDiv2)
        tDiv2.setAttribute("class","randommargin")                
       // console.log(tDiv)
        // total.append(tDiv)

        var dDiv = document.createElement("div")
        var dDiv2 = document.createElement("div")
        dDiv.setAttribute("class","randomF")

        dDiv2.append(ele.product_price)
        dDiv.append(dDiv2)
        dDiv2.setAttribute("class","randommargin")                
        // console.log(ele)
        // discount.append(dDiv)

        var rDiv = document.createElement("div")
        var rDiv2 = document.createElement("div")
        rDiv.setAttribute("class","randomFi")

        var btn = document.createElement("button")
        btn.innerHTML="x";
        btn.setAttribute("class","clear")
        btn.style.color="red";
        rDiv2.append(btn)
        rDiv.append(rDiv2)
        rDiv2.setAttribute("class","randommargin")                
        btn.setAttribute("onclick",`remove(${ind})`)
        // remove.append(rDiv)


        var Div = document.createElement("div")

        Div.append(pDiv,uDiv, qDiv, tDiv, rDiv);
        newData.append(Div)
        Div.setAttribute("class","newData")

        
    })
    total(gtotal)
    document.querySelector("#different").addEventListener("click",function(){
             window.location.href="../cricketProducts.html";
    })

}
addedtocart(arr);

function remove(ind){
arr.splice(ind, 1)
// event.target.parentNode.remove();
console.log(arr)
localStorage.setItem("shoppingCart",JSON.stringify(arr));
addedtocart(arr);
}

function increment(qty,ind){
var d = arr[ind].quantity++;
arr[ind].quantity.innerHTML = d;
localStorage.setItem("shoppingCart",JSON.stringify(arr));
addedtocart(arr);
}

function decrement(qty,ind){
    var t = document.getElementById('counter');
    if(qty > 1){
    var d = arr[ind].quantity--;
    arr[ind].quantity.innerHTML = d;
    localStorage.setItem("shoppingCart",JSON.stringify(arr));
    addedtocart(arr);
    }
    else if(qty == 1){
        remove(ind)
        t.style.display="none"
    }
}
function total(gtotal){
var apply = document.getElementById('apply');
m.innerHTML = "₹"+gtotal;
j.innerHTML = "₹"+(gtotal*12)/100 ;

if(gtotal > 500){
    l.innerHTML = "₹"+0;
    var f =  (gtotal + (gtotal*12)/100);
    w.innerHTML="₹"+ (f.toFixed(2))

    apply.onclick= function(){

        // var x=document.getElementsByClassName("clickn")
        var code=document.getElementById("coupen").value;
    var f = (gtotal + (gtotal*12)/100);
    if(code=="masai10"){
        var x=(f - (f*10)/100);
        w.innerHTML = "₹"+ (x.toFixed(2));
    
    }
    else{
        alert("Please Enter Valid Coupen Code")
    }
}
}
else{
    l.innerHTML = "₹"+60;
    w.innerHTML = "₹"+ (gtotal + (gtotal*12)/100 + 60);
    apply.onclick= function(){

        // var x=document.getElementsByClassName("clickn")
        var code=document.getElementById("coupen").value;
    var f = (gtotal + (gtotal*12)/100+60) ;
    if(code=="masai10"){
        var x=(f - (f*10)/100);
        w.innerHTML = "₹"+ (x.toFixed(2));
    
    }
    else{
        alert("Please Enter Valid Coupen Code");
    }
}
    
}

}



