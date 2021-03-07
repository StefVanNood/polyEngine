var canvasElement = document.querySelector("#scene");
var context = canvasElement.getContext("2d");

var row = ""
var object1 = []
document.querySelector("#read-button").addEventListener('click', function() {
    let file = document.querySelector("#file-input").files[0];
    let reader = new FileReader();
    reader.addEventListener('load', function(e) {
            let text = e.target.result;
            document.querySelector("#file-contents").textContent = text;
            row = text
            compile()
    });
    reader.readAsText(file);
});

function compile()
{   
    row = row.split(" ")
    object1.push(row)
    for (x = 1; x <= object1[0].length / 9; x++)
        console.log(object1[0][8 + (9 * (x - 1))])
        draw(object1[0][0 + (9 * (x - 1))], 
            object1[0][1 + (9 * (x - 1))], 
            object1[0][2 + (9 * (x - 1))], 
            object1[0][3 + (9 * (x - 1))], 
            object1[0][4 + (9 * (x - 1))], 
            object1[0][5 + (9 * (x - 1))], 
            object1[0][6 + (9 * (x - 1))], 
            object1[0][7 + (9 * (x - 1))], 
            object1[0][8 + (9 * (x - 1))], "FF", "00", "00", 0, 0)
}

function draw(x1, y1, z1, x2, y2, z2, x3, y3, z3, r, g, b, x, y)
{
    context.beginPath();
    context.moveTo(x1 + x, y1 + y);
    context.lineTo(x2 + x, y2 + y);
    context.lineTo(x3 + x, y3 + y);
    context.closePath();
    context.fillStyle = "#"+r+g+b;
    context.fill();
    console.log("rendered")
}