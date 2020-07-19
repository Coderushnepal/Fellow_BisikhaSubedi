// Click on show password button displays the password. Changes the type=password to type=text

var password = document.getElementById('password-input');
var icon = document.querySelector(".fa-eye");  
// var iconClose = document.querySelector(".fa-eye-slash");  

var clickResponse = function(e) {
    this.classList.toggle("active"); 
    if (password.getAttribute('type') == "password") {
        password.setAttribute('type', 'text');
    } else {
        password.setAttribute('type', "password");
    }
}

icon.addEventListener('click' , clickResponse);




