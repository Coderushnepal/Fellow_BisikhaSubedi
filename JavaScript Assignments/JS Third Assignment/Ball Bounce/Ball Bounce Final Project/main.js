function Main() {

    var ballons = [];

    this.start = function(n) {
        for (i = 1; i<=n; i++) {
            var ball = new createBall(i);
            ball.create();

            var size = parseInt(Math.random() * (1+ 150 - 5) +5);
            ball.setDimensions(size, size);
           
            ball.setCoordinates(parseInt(Math.random() * 2000), Math.random());
            ballons.push(ball);

            var timeout = Math.random() * 5 * 1000;
            setTimeout(
                (function() {
                    var currentBall = ball;
                    return function() {
                        currentBall.direction();
                    };
                })(),
                timeout
            );
        }
    };

    this.removeBall = function() {
        setInterval(function(){
            ballons.map(function(ball){
                // console.log(ball);
                if (ball.getCoordinates().y > 0) {
                    ball.remove();
                }
            });
        });
    }
}

var main = new Main();
main.start(300);
main.removeBall();