var canvasElement = document.querySelector("#scene");
var context = canvasElement.getContext("2d");
var XCamera = 0
var YCamera = 0
var speed = 5

var row = ""
var object1 = []
function readFile(){
    let file = document.querySelector("#file-input").files[0];
    let reader = new FileReader();
    reader.addEventListener('load', function(e) {
            let text = e.target.result;
            row = text
            row = row.split(" ")
            object1.push(row)
    });
    reader.readAsText(file);
};

document.addEventListener('keydown', function(event) {
    if (event.keyCode == 37) {
        XCamera = XCamera - speed
        compile("FF", "00", "00", XCamera, YCamera)
        console.log(XCamera + " " + YCamera)
    }
    if (event.keyCode == 39) {
        XCamera = XCamera + speed
        compile("FF", "00", "00", XCamera, YCamera)
        console.log(XCamera + " " + YCamera)
    }
    if (event.keyCode == 38) {
        YCamera = YCamera - speed
        compile("FF", "00", "00", XCamera, YCamera)
        console.log(XCamera + " " + YCamera)
    }
    if (event.keyCode == 40) {
        YCamera = YCamera + speed
        compile("FF", "00", "00", XCamera, YCamera)
        console.log(XCamera + " " + YCamera)
    }
})

function build(){
    compile("FF", "00", "00", 1, 1)
}

function compile(r, g, b, xPos, yPos)
{   
    console.log(row)
    context.clearRect(0, 0, canvasElement.width, canvasElement.height);
    if (row != "") {
        for (x = 1; x <= object1[0].length / 11; x++)
            draw(object1[0][0 + (11 * (x - 1))], 
                object1[0][1 + (11 * (x - 1))], 
                object1[0][2 + (11 * (x - 1))], 
                object1[0][3 + (11 * (x - 1))], 
                object1[0][4 + (11 * (x - 1))], 
                object1[0][5 + (11 * (x - 1))], 
                object1[0][6 + (11 * (x - 1))], 
                object1[0][7 + (11 * (x - 1))], 
                object1[0][8 + (11 * (x - 1))], r, g, b, xPos, yPos)
    }
}

function draw(x1, y1, z1, x2, y2, z2, x3, y3, z3, r, g, b, x, y)
{   
    if (z1 > 1) {
        z1 = z1 / 100
    }
    if (z2 > 1) {
        z2 = z2 / 100
    }
    if (z3 > 1) {
        z3 = z3 / 100
    }

    context.beginPath();
    context.moveTo(parseInt(x1) + (x / z1), parseInt(y1) + (y / z1));
    context.lineTo(parseInt(x2) + (x / z2), parseInt(y2) + (y / z2));
    context.lineTo(parseInt(x3) + (x / z3), parseInt(y3) + (y / z3));
    context.closePath();

    if (document.getElementById("wireframe").checked)
    {
        context.lineWidth = 5;
        context.strokeStyle = '#666666';
        context.stroke();
    }

    if (document.getElementById("solid").checked)
    {
        context.fillStyle = "#"+r+g+b;
        context.fill();
    }
}