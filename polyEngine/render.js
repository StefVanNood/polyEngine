var canvasElement = document.querySelector("#scene");
var context = canvasElement.getContext("2d");

function draw(x1, y1, z1, x2, y2, z2, x3, y3, z3, r, g, b, x, y)
{
    context.beginPath();
    context.moveTo(x1 + x, y1 + y);
    context.lineTo(x2 + x, y2 + y);
    context.lineTo(x3 + x, y3 + y);
    context.closePath();
    context.fillStyle = "#"+r+g+b;
    context.fill();
}

draw(100, 100, 1, 300, 100, 1, 100, 300, 1, "FF", "00", "00", 0, 0)
draw(100, 300, 1, 300, 100, 1, 300, 300, 1, "00", "00", "FF", 0, 0)