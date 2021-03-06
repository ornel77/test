const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

// // fillRect()
// ctx.fillStyle = 'red';
// ctx.fillRect(20, 20, 150, 100);
// ctx.fillStyle = 'blue';
// ctx.fillRect(200, 20, 150, 100);

// // strokeRect()
// ctx.lineWidth = 5;
// ctx.strokeStyle = 'green';
// ctx.strokeRect(100, 200, 150, 100);

// // clearRect()
// ctx.clearRect(25, 25, 140, 90);

// // fillText()
// ctx.font = '30px Arial';
// ctx.fillStyle = 'purple';
// ctx.fillText('Hello World', 400, 50);

// // stokeText()
// ctx.lineWidth = 1;
// ctx.strokeStyle = 'orange';
// ctx.strokeText('Hello World', 400, 100);

// Paths

// // Triangle
// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// ctx.lineTo(100, 200);
// ctx.lineTo(50, 50);
// // ctx.closePath();
// ctx.fillStyle = 'coral';
// ctx.fill();

// ctx.beginPath();
// ctx.moveTo(200, 50);
// ctx.lineTo(150, 200);
// ctx.lineTo(250, 200);
// ctx.closePath();
// ctx.stroke();

// // Rectangle
// ctx.beginPath();
// ctx.rect(300, 50, 150, 100);
// ctx.fillStyle = 'teal';
// ctx.fill();

// // Arc (circles)
// ctx.beginPath();

// const centerX = canvas.width / 2;
// const centerY = canvas.height / 2;

// // Draw head
// ctx.arc(centerX, centerY, 200, 0, Math.PI * 2);

// // Move to mouth
// ctx.moveTo(centerX + 100, centerY);

// // Draw mouth
// ctx.arc(centerX, centerY, 100, 0, Math.PI, false);

// // Move left eye
// ctx.moveTo(centerX - 60, centerY - 80);

// // Draw left eye
// ctx.arc(centerX - 80, centerY - 80, 20, 0, Math.PI * 2);

// // Move to right eye
// ctx.moveTo(centerX + 100, centerY - 80);

// // Draw right eye
// ctx.arc(centerX + 80, centerY - 80, 20, 0, Math.PI * 2);

// // Quadratic curve
// ctx.moveTo(75, 25);
// ctx.quadraticCurveTo(25, 25, 25, 62.5);
// ctx.quadraticCurveTo(25, 100, 50, 100);
// ctx.quadraticCurveTo(50, 120, 30, 125);
// ctx.quadraticCurveTo(60, 120, 65, 100);
// ctx.quadraticCurveTo(125, 100, 125, 62.5);
// ctx.quadraticCurveTo(125, 25, 75, 25);

// ctx.stroke()

// //Animation 1
// const circle = {
//     x: 200,
//     y:200,
//     size: 30,
//     dx: 5, //increment on x
//     dy: 4 //increment on y
// }

// function drawCircle() {
//     ctx.beginPath();
//     ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI *2);
//     ctx.fillStyle='purple';
//     ctx.fill()
    
// }
// function update() {
//     ctx.clearRect(0,0 ,canvas.width, canvas.height);
    
//     drawCircle()

//     //change the position
//     circle.x+=circle.dx
//     circle.y += circle.dy

//     //detect side walls
//     if(circle.x + circle.size > canvas.width || circle.x -circle.size <0) {
//         circle.dx *= -1 //=> cirlce.dx = circle.dx * -1
//     }
//     //detect top and bottom walls
//     if(circle.y + circle.size > canvas.height || circle.y -circle.size <0) {
//         circle.dy *= -1 //=> cirlce.dy = circle.dy * -1
//     }

//     //repaint the canvas
//     requestAnimationFrame(update)
// }

// update()


//Animation 2 - Character
const image = document.getElementById('source')
const player = {
    w: 50,
    h: 70,
    x: 20,
    y: 200,
    speed: 5,
    dx:0,
    dy:0
}

function drawPlayer() {
    ctx.drawImage(image, player.x, player.y, player.w, player.h);
    
}

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function newPos() {
    player.x += player.dx
    player.y += player.dy

    detectWalls()
}

function detectWalls() {
    //Left wall
    if(player.x < 0) {
        player.x = 0
    }
    //Right wall
    if(player.x + player.w > canvas.width) {
        player.x = canvas.width - player.w
    }
    //Bottom wall
    if(player.y < 0) {
        player.y = 0
    }
    //Top wall
    if(player.y + player.h > canvas.height) {
        player.y = canvas.height - player.h
    }
}

function update() {
    clear()
    drawPlayer()
    newPos()
    requestAnimationFrame(update)
}

update()

document.addEventListener('keydown', keyDown)
document.addEventListener('keyup', keyUp)

function moveUp() {
    player.dy = -player.speed
}
function moveDown() {
    player.dy = player.speed
}
function moveRight() {
    player.dx = player.speed
}
function moveLeft() {
    player.dx = -player.speed
}

function keyDown(e) {
    switch (e.key) {
        case 'ArrowUp' || 'Up':
            moveUp()
            break;
        case 'ArrowDown' || 'Down':
            moveDown()
            break;
        case 'ArrowRight' || 'Right':
            moveRight()
            break;
        case 'ArrowLeft' || 'Left':
            moveLeft()
            break;
    
    }
}
function keyUp(e) {
    if(
        e.key == 'Right' ||
        e.key == 'ArrowRight' ||
        e.key == 'Left' ||
        e.key == 'ArrowLeft' ||
        e.key == 'Down' ||
        e.key == 'ArrowDown' ||
        e.key == 'Up' ||
        e.key == 'ArrowUp' 
    ) {
        player.dx = 0
        player.dy = 0
    }

    
}