var canvasElement = document.querySelector("#scene");
var context = canvasElement.getContext("2d");

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

function compile()
{   
    context.clearRect(0, 0, canvasElement.width, canvasElement.height);
    if (row != "") {
        for (x = 1; x <= object1[0].length / 9; x++)
            draw(object1[0][0 + (9 * (x - 1))], 
            object1[0][1 + (9 * (x - 1))], 
            object1[0][2 + (9 * (x - 1))], 
            object1[0][3 + (9 * (x - 1))], 
            object1[0][4 + (9 * (x - 1))], 
            object1[0][5 + (9 * (x - 1))], 
            object1[0][6 + (9 * (x - 1))], 
            object1[0][7 + (9 * (x - 1))], 
            object1[0][8 + (9 * (x - 1))], "FF", "00", "00", 1, 1)
    }
}

function draw(x1, y1, z1, x2, y2, z2, x3, y3, z3, r, g, b, x, y)
{   
    context.beginPath();
    context.moveTo(parseInt(x1) + x, parseInt(y1) + y);
    context.lineTo(parseInt(x2) + x, parseInt(y2) + y);
    context.lineTo(parseInt(x3) + x, parseInt(y3) + y);
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