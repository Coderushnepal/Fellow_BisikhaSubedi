function Main() {

    var ballons = [];

    this.start = function(n) {
        for (i = 1; i<=n; i++) {
            var ball = new createBall(i);
            ball.create();

            var size = parseInt(Math.random() * (1+ 150 - 5) +5);
            ball.setDimensions(size, size);
           
            ball.setCoordinates(parseInt(Math.random() * 2000), 0);
            ballons.push(ball);
            // console.log(nextTop);
            var timeout = Math.random() * 7 * 1000;
            setTimeout(
                (function() {
                    var currentBall = ball;
                    return function() {
                        currentBall.direction();
                        console.log(this.nextTop);
                    };
                })(),
                timeout
            );
        }
    };
}

var main = new Main();
main.start(300);
