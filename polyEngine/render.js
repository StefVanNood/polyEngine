var canvasElement = document.querySelector("#scene");
var context = canvasElement.getContext("2d");
var colorInput = document.querySelector("#color")
var XCamera = 0
var YCamera = 0
var RotationCamera = 0
var vel = 1

var row = ""
var object1 = []
function readFile(){
    let file = document.querySelector("#file-input").files[0];
    let reader = new FileReader();
    reader.addEventListener('load', function(e) {
            let text = e.target.result;
            filesOut = document.querySelector("#liveOutput")
            filesOut.innerHTML = "file name: " + file.name + 
                                "<br />file size: " + file.size + " bytes" + 
                                "<br />file type: " + file.type +
                                "<br />" + filesOut.innerHTML
            row = text
            row = row.split(" ")
            object1.push(row)
            console.log(object1)
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
    switch(event.keyCode){
        case 37:
            moving = true
            moveLeft()
        break;
        case 39:
            moving = true
            moveRight()
        break;
        case 38:
            moving = true
            moveUp()
        break;
        case 40:
            moving = true
            moveDown()
        break;
    }
}
document.onkeyup = stopMove;
function stopMove(event) {
    vel = 1
    moving = false
}

function moveUp() {
    if (moving == true) {
        for(var start = 1; start < 100; start++) {
            setTimeout(function () {
                YCamera = YCamera - (vel / 100)
                build()
                start++
            }, 1);
        }
        vel += 1
    }
}
function moveDown() {
    if (moving == true) {
        for(var start = 1; start < 100; start++) {
            setTimeout(function () {
                YCamera = YCamera + (vel / 100)
                build()
                start++
            }, 1);
        }
        vel += 1
    }
}
function moveRight() {
    if (moving == true) {
        for(var start = 1; start < 100; start++) {
            setTimeout(function () {
                XCamera = XCamera + (vel / 100)
                build()
                start++
            }, 1);
        }
        vel += 1
    }
}
function moveLeft() {
    if (moving == true) {
        for(var start = 1; start < 100; start++) {
            setTimeout(function () {
                XCamera = XCamera - (vel / 100)
                build()
                start++
            }, 1);
        }
        vel += 1
    }
}

function resetPos() {
    xPos1 = document.getElementById("xPos")
    yPos1 = document.getElementById("yPos")
    if (xPos1.value != "") {
        XCamera = Number(xPos1.value)
    }
    if (yPos1.value != "") {
        YCamera = Number(yPos1.value)
    }
    build()
}

function build(){
    for (element = 0; element < object1.length; element++) {
        for (x = 1; x <= object1[element].length / 13; x++){
            object1[element][10 + (13 * (x - 1))] = 150
        }
        for (x = 1; x <= object1[element].length / 13; x++){
            object1[element][11 + (13 * (x - 1))] = 60
        }
    }
    xOutput = document.querySelector("#xOutput")
    yOutput = document.querySelector("#yOutput")
    xOutput.innerHTML = Math.round(XCamera)
    yOutput.innerHTML = Math.round(YCamera)
    hexColor = colorInput.value
    compile(hexColor)
}

function compile(rgb)
{
    context.clearRect(0, 0, canvasElement.width, canvasElement.height);
    if (row != "") {
        for (element = 0; element < object1.length; element++) {
            for (x = 1; x <= object1[element].length / 13; x++) {
                if (document.getElementById("light").checked) {
                    if (object1[element][9 + (13 * (x - 1))] == 2){
                        rgb = "#000000"
                    } else if (object1[element][9 + (13 * (x - 1))] == 3){
                        rgb = "#000000"
                    } else if (object1[element][9 + (13 * (x - 1))] == 6){
                        rgb = "#000000"
                    } else {
                        rgb = hexColor
                    }
                }
                if (document.getElementById("speedrender").checked) {
                    if (object1[element][9 + (13 * (x - 1))] == 5 && YCamera >= 35){
                        draw(object1[element][0 + (13 * (x - 1))], 
                            object1[element][1 + (13 * (x - 1))], 
                            object1[element][2 + (13 * (x - 1))], 
                            object1[element][3 + (13 * (x - 1))], 
                            object1[element][4 + (13 * (x - 1))], 
                            object1[element][5 + (13 * (x - 1))], 
                            object1[element][6 + (13 * (x - 1))], 
                            object1[element][7 + (13 * (x - 1))], 
                            object1[element][8 + (13 * (x - 1))], 
                            rgb, 
                            object1[element][10 + (13 * (x - 1))], 
                            object1[element][11 + (13 * (x - 1))])
                    }
                    if (object1[element][9 + (13 * (x - 1))] == 3 && YCamera <= -35){
                        draw(object1[element][0 + (13 * (x - 1))], 
                            object1[element][1 + (13 * (x - 1))], 
                            object1[element][2 + (13 * (x - 1))], 
                            object1[element][3 + (13 * (x - 1))], 
                            object1[element][4 + (13 * (x - 1))], 
                            object1[element][5 + (13 * (x - 1))], 
                            object1[element][6 + (13 * (x - 1))], 
                            object1[element][7 + (13 * (x - 1))], 
                            object1[element][8 + (13 * (x - 1))], 
                            rgb, 
                            object1[element][10 + (13 * (x - 1))], 
                            object1[element][11 + (13 * (x - 1))])
                    }
                    if (object1[element][9 + (13 * (x - 1))] == 4 && XCamera <= -35){
                        draw(object1[element][0 + (13 * (x - 1))], 
                            object1[element][1 + (13 * (x - 1))], 
                            object1[element][2 + (13 * (x - 1))], 
                            object1[element][3 + (13 * (x - 1))], 
                            object1[element][4 + (13 * (x - 1))], 
                            object1[element][5 + (13 * (x - 1))], 
                            object1[element][6 + (13 * (x - 1))], 
                            object1[element][7 + (13 * (x - 1))], 
                            object1[element][8 + (13 * (x - 1))], 
                            rgb, 
                            object1[element][10 + (13 * (x - 1))], 
                            object1[element][11 + (13 * (x - 1))])
                    }
                    if (object1[element][9 + (13 * (x - 1))] == 2 && XCamera >= 35){
                        draw(object1[element][0 + (13 * (x - 1))], 
                            object1[element][1 + (13 * (x - 1))], 
                            object1[element][2 + (13 * (x - 1))], 
                            object1[element][3 + (13 * (x - 1))], 
                            object1[element][4 + (13 * (x - 1))], 
                            object1[element][5 + (13 * (x - 1))], 
                            object1[element][6 + (13 * (x - 1))], 
                            object1[element][7 + (13 * (x - 1))], 
                            object1[element][8 + (13 * (x - 1))], 
                            rgb, 
                            object1[element][10 + (13 * (x - 1))], 
                            object1[element][11 + (13 * (x - 1))])
                    }
                    if (object1[element][9 + (13 * (x - 1))] == 1){
                        draw(object1[element][0 + (13 * (x - 1))], 
                            object1[element][1 + (13 * (x - 1))], 
                            object1[element][2 + (13 * (x - 1))], 
                            object1[element][3 + (13 * (x - 1))], 
                            object1[element][4 + (13 * (x - 1))], 
                            object1[element][5 + (13 * (x - 1))], 
                            object1[element][6 + (13 * (x - 1))], 
                            object1[element][7 + (13 * (x - 1))], 
                            object1[element][8 + (13 * (x - 1))], 
                            rgb, 
                            object1[element][10 + (13 * (x - 1))], 
                            object1[element][11 + (13 * (x - 1))])
                    }
                    if (object1[element][9 + (13 * (x - 1))] == 6 && RotationCamera >= 35){
                        draw(object1[element][0 + (13 * (x - 1))], 
                            object1[element][1 + (13 * (x - 1))], 
                            object1[element][2 + (13 * (x - 1))], 
                            object1[element][3 + (13 * (x - 1))], 
                            object1[element][4 + (13 * (x - 1))], 
                            object1[element][5 + (13 * (x - 1))], 
                            object1[element][6 + (13 * (x - 1))], 
                            object1[element][7 + (13 * (x - 1))], 
                            object1[element][8 + (13 * (x - 1))], 
                            rgb, 
                            object1[element][10 + (13 * (x - 1))], 
                            object1[element][11 + (13 * (x - 1))])
                    }
                } else {
                    draw(object1[element][0 + (13 * (x - 1))], 
                        object1[element][1 + (13 * (x - 1))], 
                        object1[element][2 + (13 * (x - 1))], 
                        object1[element][3 + (13 * (x - 1))], 
                        object1[element][4 + (13 * (x - 1))], 
                        object1[element][5 + (13 * (x - 1))], 
                        object1[element][6 + (13 * (x - 1))], 
                        object1[element][7 + (13 * (x - 1))], 
                        object1[element][8 + (13 * (x - 1))], 
                        rgb, 
                        object1[element][10 + (13 * (x - 1))], 
                        object1[element][11 + (13 * (x - 1))])
                }
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
    context.moveTo((parseInt(x1) + ((XCamera) / z1) + parseInt(x)), (parseInt(y1) + ((YCamera) / z1) + parseInt(y)));
    context.lineTo((parseInt(x2) + ((XCamera) / z2) + parseInt(x)), (parseInt(y2) + ((YCamera) / z2) + parseInt(y)));
    context.lineTo((parseInt(x3) + ((XCamera) / z3) + parseInt(x)), (parseInt(y3) + ((YCamera) / z3) + parseInt(y)));
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