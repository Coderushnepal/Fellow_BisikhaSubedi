function Form() {

    var that = this;

    // Setting the properties of the form
    this.form = document.createElement('form');
    this.form.name = 'js_form';
    this.form.method = 'POST';
    this.form.action = 'validator.js';

    // console.log(this.form);

    this.formAttributes = [
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
            type : "text",
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

    // console.log(this.formAttributes );

    this.formAttributes.forEach(function(value){
        this.input = document.createElement("input");
        // setting input attirbutes 
        this.input.name = value.name;
        this.input.type = value.type;
        this.input.placeholder = value.placeholder;  
        // this.form.appendChild(this.input);  
        // console.log(input);
        
        // setting input labels
        this.Label = document.createElement("label");
        this.Label.innerHTML = value.label;
        // console.log(Label.innerHTML);


        // error messages
        this.errorMessage = document.createElement("div");
        this.errorMessage.id = input.label;
        this.errorMessage.innerHTML = value.error; 
        // console.log(this.errorMessage);
    });

    this.validatebutton = document.createElement("button");
    this.validatebutton.style.padding = "10px 20px";
    this.validatebutton.style.backgroundColor = "blue";

    this.validatebutton.addEventListener('click' , function(){
        that.validator();
    })
    
   
}
var form = new Form();
// document.body.appendChild(this.form);
// form.append(input);