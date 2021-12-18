
	var userData = JSON.parse(localStorage.getItem("userDatabase"));


	
	var email_error = document.getElementById('email_error');
	var pass_error = document.getElementById('pass_error');


document.querySelector("#btn3").addEventListener("click",function(event){
   event.preventDefault();
   console.log("btn3function works");
	var email = document.querySelector("#email").value;
	var pass = document.querySelector("#pass").value;
	console.log(email,pass);
	var emailverify = false;
    for(var i=0;i<userData.length;i++){
	  console.log("entering forloop")
       if(email==userData[i].email){
		   console.log("emailcheck");
		   console.log(userData[i].email);
		   emailverify = true;
		   if(pass == userData[i].password){
			   console.log("password check");
			   window.location.href="./home page.html";
			   break;
		   }else{
            console.log("password error");
			pass_error.style.border = "1px solid red";
			pass_error.style.display = "block";
		   }
	   }

	}

	if(emailverify==false){
		email_error.style.border = "1px solid red";
	    email_error.style.display = "block";
	}

})

  




   