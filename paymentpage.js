


function myvalue(){
    if(document.querySelector(".tickguest").checked && document.querySelector(".emailenter").value.endsWith("@gmail.com")){
        document.querySelector(".step1").setAttribute("id","step1hidden")
        document.querySelector(".step2").setAttribute("id","step2content")
    }
    else if(document.querySelector(".tickemail").checked && document.querySelector(".enterpassword").value.replace(/\s/g,"")){
        document.querySelector(".step1").setAttribute("id","step1hidden")
        document.querySelector(".step2").setAttribute("id","step2content")
    }
    else{
        alert("Please Enter Valid detail")
    }
}

function myvalue2(){
    if((document.querySelector(".namevalue").value.replace(/\s/g,""))  && 
    (document.querySelector(".lastvalue").value.replace(/\s/g,"")) &&
    (document.querySelector(".arrdessvalue").value.replace(/\s/g,"")) &&
    (document.querySelector(".landmarkvalue").value.replace(/\s/g,""))){
        if(document.querySelector(".zipcodevalue").value.length==6){
            if(document.querySelector(".selectcountry").value=="India"){
                if(document.querySelector(".selectstate").value=="Maharashtra"){
                    if(document.querySelector(".selectstate").value=="Maharashtra"){
                        if((document.querySelector(".selectcity").value=="Akola") ||
                        (document.querySelector(".selectcity").value=="Mumbai") ||
                        (document.querySelector(".selectcity").value=="Nagpur") ||
                        (document.querySelector(".selectcity").value=="Pune")){
                            if(document.querySelector(".numwidth1cc").value.length==2 &&
                            document.querySelector(".numwidth1").value.length>=6){
                                if(document.querySelector(".numwidth2").value.length>=6){
                                    console.log("here")    
                                    document.querySelector(".step2").setAttribute("id","step2hidden")
                                    document.querySelector(".step3").setAttribute("id","step3content")
                                }
                                else{
                                    alert("Please Enter Valid Number")
                                }
                            }
                            else{
                                alert("Please Enter Valid Number")
                            }
                        }
                        else{
                            alert("Please Select City Name")
                        }
                    }
                    else{
                        alert("Please Select State Name")
                    }
                }
                else{
                    alert("Please Select State Name")
                }
            }
            else{
                alert("Please Select Country Name")
            }
        }
        else{
            alert("Please Enter Valid Pincode")
        }
    }
    else{
        alert("Please Enter Valid detail")
    }
}



function myvalue3(){
    document.querySelector(".step3").setAttribute("id","step3hidden")
    document.querySelector(".step4").setAttribute("id","step4content")
}


function myvalue4(){
    if(document.querySelector(".avaopt").value=="cod"){
        alert("Order Successful")
    }
    else if(document.querySelector(".avaopt").value=="cc" || document.querySelector(".avaopt").value=="dc"){
        alert("Currently Card Service is not availaible")
    }
    else{
        alert("Please Select Option")
    }
}
