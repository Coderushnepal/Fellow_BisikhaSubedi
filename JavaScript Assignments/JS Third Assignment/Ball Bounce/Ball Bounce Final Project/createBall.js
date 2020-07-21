// Creating the ball
function Ball() {

    // Function to create a ball with an argument that specifies the number of ball to be placed in the window
    this.createBall = function(i) {

       
            this.ball = document.createElement('div');
            this.ball.id = i;

            // var that = this;

            this.ball.style.position = "absolute";
            this.ball.style.borderRadius = "50%";
            // console.log(this.ball);

            // setting random color of the balls
            var colors = ['black' , 'blue', 'red' , 'green' , 'yellow'];
            this.ball.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

            document.body.appendChild(this.ball);
        
    };

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

    // Moving the balls in downward direction
    // interval = setInterval(function() {
    //     var currentTop = ball.style.top;
    //     var nextTop = parseInt(currentTop) + 10 * direction;
    //     ball.style.top = nextTop + 'px'; 
    // }, 1000/60)
}
var ball = new Ball();
// document.body.appendChild(ball.ball);
for( i=0 ; i<100; i++ ) {
    ball.createBall();
    ball.setDimensions(Math.random() * 300, Math.random() * 300);
    ball.setCoordinates(Math.random() * 2000, 0);
    // ball.interval();
}
