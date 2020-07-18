// Click on show password button displays the password. Changes the type=password to type=text

var password = document.getElementById('password-input');
var showPassword = document.getElementById('show-password');

var clickResponse = function(e) {
    if (password.getAttribute('type') == "password") {
        password.setAttribute('type', 'text');
    }
}

showPassword.addEventListener('click' , clickResponse);




