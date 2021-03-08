var canvasElement = document.querySelector("#scene");
var context = canvasElement.getContext("2d");
var colorInput = document.querySelector("#color")
var XCamera = 0
var YCamera = 0
var RotationCamera = 0
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
            object1 = []
            object1.push(row)
    });
    reader.readAsText(file);
};

colorInput.addEventListener('input', () => {
    let color = colorInput.value
    document.getElementById("hex").innerHTML = "hex: " + color
    build()
})

document.onkeydown = move;
function move(event) {
    event = event || window.event;
    if (event.keyCode == 37) {
        XCamera = XCamera - speed
        console.log(XCamera)
        build()
    } else if (event.keyCode == 39) {
        XCamera = XCamera + speed
        console.log(XCamera)
        build()
    } else if (event.keyCode == 38) {
        YCamera = YCamera - speed
        console.log(YCamera)
        build()
    } else if (event.keyCode == 40) {
        YCamera = YCamera + speed
        console.log(YCamera)
        build()
    }
}

function build(){
    var light = document.getElementById("lightBulb");
    if (XCamera < -30) {
        light.style.marginLeft = (80 + XCamera) + "px";
    } else {
        light.style.marginLeft = (80 + -30) + "px";
    }
    hexColor = colorInput.value
    compile(hexColor, 1, 1)
}

function compile(rgb, xPos, yPos)
{
    context.clearRect(0, 0, canvasElement.width, canvasElement.height);
    if (row != "") {
        for (x = 1; x <= object1[0].length / 11; x++){
            if (document.getElementById("light").checked) {
                if (object1[0][9 + (11 * (x - 1))] == 2){
                    rgb = "#000000"
                } else if (object1[0][9 + (11 * (x - 1))] == 3){
                    rgb = "#000000"
                } else if (object1[0][9 + (11 * (x - 1))] == 6){
                    rgb = "#000000"
                } else {
                    rgb = hexColor
                }
            }
            if (document.getElementById("speedrender").checked) {
                if (object1[0][9 + (11 * (x - 1))] == 5 && YCamera >= 35){
                    draw(object1[0][0 + (11 * (x - 1))], 
                        object1[0][1 + (11 * (x - 1))], 
                        object1[0][2 + (11 * (x - 1))], 
                        object1[0][3 + (11 * (x - 1))], 
                        object1[0][4 + (11 * (x - 1))], 
                        object1[0][5 + (11 * (x - 1))], 
                        object1[0][6 + (11 * (x - 1))], 
                        object1[0][7 + (11 * (x - 1))], 
                        object1[0][8 + (11 * (x - 1))], rgb, xPos, yPos)
                }
                if (object1[0][9 + (11 * (x - 1))] == 3 && YCamera <= -35){
                    draw(object1[0][0 + (11 * (x - 1))], 
                        object1[0][1 + (11 * (x - 1))], 
                        object1[0][2 + (11 * (x - 1))], 
                        object1[0][3 + (11 * (x - 1))], 
                        object1[0][4 + (11 * (x - 1))], 
                        object1[0][5 + (11 * (x - 1))], 
                        object1[0][6 + (11 * (x - 1))], 
                        object1[0][7 + (11 * (x - 1))], 
                        object1[0][8 + (11 * (x - 1))], rgb, xPos, yPos)
                }
                if (object1[0][9 + (11 * (x - 1))] == 4 && XCamera <= -35){
                    draw(object1[0][0 + (11 * (x - 1))], 
                        object1[0][1 + (11 * (x - 1))], 
                        object1[0][2 + (11 * (x - 1))], 
                        object1[0][3 + (11 * (x - 1))], 
                        object1[0][4 + (11 * (x - 1))], 
                        object1[0][5 + (11 * (x - 1))], 
                        object1[0][6 + (11 * (x - 1))], 
                        object1[0][7 + (11 * (x - 1))], 
                        object1[0][8 + (11 * (x - 1))], rgb, xPos, yPos)
                }
                if (object1[0][9 + (11 * (x - 1))] == 2 && XCamera >= 35){
                    draw(object1[0][0 + (11 * (x - 1))], 
                        object1[0][1 + (11 * (x - 1))], 
                        object1[0][2 + (11 * (x - 1))], 
                        object1[0][3 + (11 * (x - 1))], 
                        object1[0][4 + (11 * (x - 1))], 
                        object1[0][5 + (11 * (x - 1))], 
                        object1[0][6 + (11 * (x - 1))], 
                        object1[0][7 + (11 * (x - 1))], 
                        object1[0][8 + (11 * (x - 1))], rgb, xPos, yPos)
                }
                if (object1[0][9 + (11 * (x - 1))] == 1){
                    draw(object1[0][0 + (11 * (x - 1))], 
                        object1[0][1 + (11 * (x - 1))], 
                        object1[0][2 + (11 * (x - 1))], 
                        object1[0][3 + (11 * (x - 1))], 
                        object1[0][4 + (11 * (x - 1))], 
                        object1[0][5 + (11 * (x - 1))], 
                        object1[0][6 + (11 * (x - 1))], 
                        object1[0][7 + (11 * (x - 1))], 
                        object1[0][8 + (11 * (x - 1))], rgb, xPos, yPos)
                }
                if (object1[0][9 + (11 * (x - 1))] == 6 && RotationCamera >= 35){
                    draw(object1[0][0 + (11 * (x - 1))], 
                        object1[0][1 + (11 * (x - 1))], 
                        object1[0][2 + (11 * (x - 1))], 
                        object1[0][3 + (11 * (x - 1))], 
                        object1[0][4 + (11 * (x - 1))], 
                        object1[0][5 + (11 * (x - 1))], 
                        object1[0][6 + (11 * (x - 1))], 
                        object1[0][7 + (11 * (x - 1))], 
                        object1[0][8 + (11 * (x - 1))], rgb, xPos, yPos)
                }
            } else {
                draw(object1[0][0 + (11 * (x - 1))], 
                    object1[0][1 + (11 * (x - 1))], 
                    object1[0][2 + (11 * (x - 1))], 
                    object1[0][3 + (11 * (x - 1))], 
                    object1[0][4 + (11 * (x - 1))], 
                    object1[0][5 + (11 * (x - 1))], 
                    object1[0][6 + (11 * (x - 1))], 
                    object1[0][7 + (11 * (x - 1))], 
                    object1[0][8 + (11 * (x - 1))], rgb, xPos, yPos)
            }
        }
    }
}

function draw(x1, y1, z1, x2, y2, z2, x3, y3, z3, rgb, x, y)
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
    context.moveTo(parseInt(x1) + ((x + XCamera) / z1), parseInt(y1) + ((y + YCamera) / z1));
    context.lineTo(parseInt(x2) + ((x + XCamera) / z2), parseInt(y2) + ((y + YCamera) / z2));
    context.lineTo(parseInt(x3) + ((x + XCamera) / z3), parseInt(y3) + ((y + YCamera) / z3));
    context.closePath();

    if (document.getElementById("wireframe").checked)
    {
        context.lineWidth = 5;
        context.strokeStyle = '#666666';
        context.stroke();
    }

    if (document.getElementById("solid").checked)
    {
        context.fillStyle = rgb;
        context.fill();
    }
}