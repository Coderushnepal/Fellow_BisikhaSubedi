// Function to create a ball along with its properties and attributes

function createBall() {
    var that = this;
    this.canbedeleted = false;
    this.delete = false;

    this.create = function() {
        this.ball = document.createElement('div');

        // styling the ball
        this.ball.style.position = "absolute";
        this.ball.style.borderRadius = "50%";

        // color property
        var colors = [ "SteelBlue", "Tan",  "Teal",  "Thistle", "Tomato", "Turquoise", "Violet"];
        this.ball.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        document.body.appendChild(this.ball);  
    }

    // Setting random dimension of the balls
    this.setDimensions = function(width , height) {
        this.ball.style.width = width + 'px';
        this.ball.style.height = height + 'px';
    };

    // setting the co-ordinates of the ball. Initially all balls lie on top of window, so initial y-axis === 0
    this.setCoordinates = function ( xordinate, yordinate ) {
        this.ball.style.left = xordinate + 'px';
        this.ball.style.top = yordinate + 'px';
    };

    // Returns the balls coordinates. if y coordinate is greater than a value, ball can be deleted
    this.getCoordinates = function () {
        return {
            x: parseInt(this.ball.style.left),
            y: parseInt(this.ball.style.top),
        };
    };

    // Function for the fall of balls
    this.direction = function() {
        this.canbedeleted = true;
        this.interval = setInterval(function(){
            var currentTop = that.ball.style.top;
            var nextTop = parseInt(currentTop) + (Math.random() * 8);
            that.ball.style.top = nextTop + 'px';
        }, 1000/60);
    };

    // Remove on Click
    // this.ball.addEventListener('click' , function() {
    //     // console.log(this.ball);
    //     // if (that.canbedeleted) {
    //     //     // that.remove();
    //     // }
    // });

    // this.remove = function() {
    //     document.body.removeChild(this.ball);
    //     clearInterval(interval);
    //     this.delete = true;
    // }
}
