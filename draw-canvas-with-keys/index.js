const canvas = document.getElementById("my-canvas");
const papel = canvas.getContext("2d");

const keys = {
    left: 37,
    up: 38,
    right: 39,
    down: 40
}

function draw(color, xInicio, yInicio, xFim, yFim) {
    papel.beginPath();
    papel.strokeStyle = color;
    papel.lineWidth = 3;
    papel.moveTo(xInicio, yInicio);
    papel.lineTo(xFim, yFim);
    papel.stroke();
    papel.closePath();
}

function drawLine(event) {
    switch (event.keyCode) {
        case keys.left:
            draw("red", x, y, x - move, y);
            x -= move;
            break;
        case keys.up:
            draw("red", x, y, x, y - move);
            y -= move;
            break;
        case keys.right:
            draw("red", x, y, x + move, y);
            x += move;
            break;
        case keys.down:
            draw("red", x, y, x, y + move);
            y += move;
            break;
        default:
            break;
    }
}

let x = 50;
let y = 50;
const move = 10;

document.addEventListener("keydown", drawLine);