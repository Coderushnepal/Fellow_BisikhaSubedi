function Validator() {
    this.form = new Form();
    document.body.appendChild(this.form);

    this.nameValidation = function() {
        this.nameInput = this.form["this.input.name"].value;
        // console.log(this.nameInput);
        if(nameInput.length < 3) {
            this.errorMessage.style.display = 'block';
        }
    }
}