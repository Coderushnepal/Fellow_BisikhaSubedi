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

            // for position
            this.removeBall = function() {
                setInterval(function() {
                    balls.forEach(function(ball) {
                        if (!ball.isDeleted && ball.getPosition().x > window.innerHeight) {
                            ball.remove();
                        }
                    });
                }, 1000 / 10);
            };

            // Calls this function after certain delay
            // Timeout lay 2ota argument leenchha, 1ota kati time delay aarko chain callback function 
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

    // Yth position of the ball window bhanda baira gayo bhanay, ball.remove huna paryo
    // each ball ma loop launay, if ball widow.clientheight vanda baira gayo bhanay, remove
    // this.removeBall = function() {
    //     setInterval(function(){
    //         ballons.map(function(ball){
    //             // console.log(ball);
    //             if (ball.getCoordinates().y > 0) {
    //                 ball.remove();
    //             }
    //         });
    //     });
    // }
}

var main = new Main();
main.start(300);
// main.removeBall();