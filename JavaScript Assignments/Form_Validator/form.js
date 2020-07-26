// Array of objects containing the elements inside the form
var formAttributes = [
    {
        label: "User Name",
        name : "fullName",
        type : "text",
        placeholder : "Enter username",
        error: "Username must be at least 3 characters"
    },
    {
        label: "Email",
        name : "email",
        type : "email",
        placeholder : "Enter email",
        error: "Email is not valid"
    },
    {
        label: "Password",
        name : "password",
        type : "password",
        placeholder : "Enter password",
        error: "Password must be atleast 6 characters"
    },
    {
        label: "Confirm Password",
        name : "confirmpassword",
        type : "password",
        placeholder : "Enter password again",
        error: "Password2 is required"
    }
]   

function Form() {
    this.createFormContainer = function(container) {
        this.form = document.createElement('form');
        this.form.classList.add('form');
        container.append(this.form);
    };

    this.createForm = function(value, index) {
        var label = document.createElement('label');
        label.id = index + 1;
        label.for = value.name;
        label.innerHTML = value.label;

        // label styling
        label.style.display = "inline-block";
        label.style.width = "100%";

        this.form.appendChild(label);

        input = document.createElement('input');
		input.classList.add('input');
        input.id = value.name;

        input.setAttribute('type' , value.type);
        input.setAttribute('name' , value.name);
        input.setAttribute('placeholder' , value.placeholder);

        // Styling input
        input.style.display = 'block';
        input.style.margin = '5px 0px';
        input.style.width = '100%';
        input.style.padding = '7px 10px';
        input.style.border = '1px solid #000000';

        this.form.appendChild(input);

        var errorDiv = document.createElement('div');
        errorDiv.id = value.name +'-'+ 'error';
        errorDiv.classList.add('errorBox' , 'hidden');
        errorDiv.innerHTML = value.error;

        // Styling errordiv
        errorDiv.style.margin = "10px 0px"

        this.form.appendChild(errorDiv);
    }

    this.createSubmitButton = function() {
        var button = document.createElement('button');
        button.type = 'submit';
        button.name = 'submit';
        button.id = 'submit-btn';
        button.innerHTML = "Submit";

        button.style.margin = '20px 0 0 0';
        button.style.width = '100%';
        button.style.color = 'white';
        button.style.padding = '10px 0px';
        button.style.backgroundColor = 'rgb(7, 138, 253)';
        

        this.form.appendChild(button);
    };
   
}

// Form
var container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

// styling the form
container.style.position = 'absolute';
container.style.top = '50px';
container.style.left = '400px';
container.style.border = '1px solid #000000';
container.style.padding = '30px 50px';

// Form Title
var title = document.createElement('h1');
title.innerHTML = "Register with us";
container.appendChild(title);

// Form
var form = new Form();
form.createFormContainer(container);
formAttributes.forEach(function(value,index){
    // console.log(value, index);
    form.createForm(value, index);
});

form.createSubmitButton();