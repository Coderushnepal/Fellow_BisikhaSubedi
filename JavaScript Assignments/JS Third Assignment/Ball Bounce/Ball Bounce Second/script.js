const button = document.getElementById('btn');
const frame = document.getElementById('frame');

const frameHeight = frame.clientHeight;
const frameWidth = frame.clientWidth;

// every time button click garda, naya div element banna paryo joslai border radius deyera circle jasto dekhaunay
// ball lai frame ma append gardeenay
// ball ko click event ma, ball ekota direction ma move huna paryo
// frame ko surface ma pugaypachhi ball lay direction change garna paryo

button.onclick = function(e){
    var ball = document.createElement('div');

    // adding class to new div element
    ball.classList.add('circle');

    // styling new div element
    ball.style.width = '100px';
    ball.style.height = '100px';
    ball.style.borderRadius = '50%';
    ball.style.backgroundColor = 'pink';
    ball.style.position = 'absolute';

    // positioning the ball
    ball.style.top = Math.random() * (frameHeight - 100) + 'px';
    ball.style.left = Math.random() * (frameWidth - 100) + 'px';

    // Appending ball inside the frame
    frame.appendChild(ball);

    // ball ko click event starts.
    // ball lai click garda, certain interval ma certain direction ma move huna paryo.
    // interval set garna set interval, clear garna clear interval
    // ball ko direction ekota certain height/width ma pugera reverse garaunay


    var interval;
    var direction = 1;
    var ballHeight = ball.clientHeight;

    interval = setInterval(function() {
        var currentTop = ball.style.top;
        var nextTop = parseInt(currentTop) + 10 * direction;
        ball.style.top = nextTop + 'px';

        if(nextTop >= (frameHeight - ballHeight) || nextTop < 0) {
            direction *= -1;
        } 
    }, 1000/60)
};

    // ball.addEventListener("click" , function() {
    //     ball.style.backgroundColor = 'black';
    //     interval = setInterval(function() {
    //         var currentTop = ball.style.top;
    //         var nextTop = parseInt(currentTop) + 10 * direction;
    //         ball.style.top = nextTop + 'px';

    //         if(nextTop >= (frameHeight - ballHeight) || nextTop < 0) {
    //             direction *= -1;
    //         } 
    //     }, 1000/60)
    // });
