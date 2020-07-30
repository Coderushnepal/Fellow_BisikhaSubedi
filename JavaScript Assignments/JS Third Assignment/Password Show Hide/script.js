// Click on show password button displays the password. Changes the type=password to type=text

var password = document.getElementById('password');
var showPwd = document.getElementById('showpwd'); 

showPwd.addEventListener('click' , function(e){
    var type = password.getAttribute('type') == 'password' ? 'text' : 'password';
    password.setAttribute('type' , type);
    if (type == 'text') {
        this.classList.remove('fa-eye-slash'); //classList lay always gives array of class 
        this.classList.add('fa-eye');
    } else {
        this.classList.toggle('fa-eye-slash');
    }
});





