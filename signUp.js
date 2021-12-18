
   
var user = JSON.parse(localStorage.getItem("userDatabase")) || [];

var form = document.getElementById('form');
var username = document.getElementById('username');
var email = document.getElementById('email');
var password = document.getElementById('password1');
var password2 = document.getElementById('password2');

form.addEventListener('submit', function(elem) {
	elem.preventDefault();
	
	checkInputs();
	

});


function checkInputs() {
	
	var usernameValue = username.value;
	var emailValue = email.value;
	var passwordValue = password1.value;
	var password2Value = password2.value;
	
	var user_right = false;
	var email_right = false
	var password_right = false

	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
		user_right=true;
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
		email_right=true;
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
		
	} else {
		setSuccessFor(password);
		
		
		
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password cannot be blank');

	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Password does not match');
	} else{
		setSuccessFor(password2);
		password_right = true;

	}
   
	if(user_right==true&&email_right==true&&password_right==true){
       console.log(window.location.href="signIn.html");
		console.log(username.value)
	    var userObj = {
		username:username.value,
		email:email.value,
		password:password.value,
	}
    
	user.push(userObj);
	localStorage.setItem("userDatabase",JSON.stringify(user));
	}
    

}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'miniform error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'miniform success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    console.log(window.location.href="signIn.html");
}
