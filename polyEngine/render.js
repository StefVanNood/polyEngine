var canvasElement = document.querySelector("#scene");
var context = canvasElement.getContext("2d");

function draw()
{
    context.beginPath();
    context.moveTo(100, 100);
    context.lineTo(100, 300);
    context.lineTo(300, 300);
    context.closePath();
    context.fillStyle = "#FFCC00";
    context.fill();
}