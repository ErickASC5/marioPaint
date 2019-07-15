function setup(){
    createCanvas(500,500);    
}
// Drag the mouse across the page
// to change its value
function draw(){
    fill(100,0,0);
    rect(50,50,30,30);
    fill(0,100,0);
    rect(150,50,50,50);
    fill(0,0,0);
    rect(400,50,50,50);
    fill(100,100,100);
}
let shapeA = false;
let shapeB = false;
function mouseClicked(){
    if(mouseX >= 50 && mouseX <= 80 && mouseY >= 50 && mouseY <= 80){
        shapeA = true;
        shapeB = false;
    }
    else if(mouseX >= 150 && mouseX <= 200 && mouseY >= 50 && mouseY <= 100){
        shapeA = false;
        shapeB = true;
    }
    else if(mouseX >= 400 && mouseX <= 450 && mouseY >= 50 && mouseY <= 100){
        fill(255,255,255);
        rect(-1,-1,502,502);
    }
}

function mouseDragged(){
    if(shapeA == true){
        rect(mouseX, mouseY, 30, 30);
    }
    else if (shapeB == true){
        rect(mouseX, mouseY, 50, 50);
    }
    else{
        ellipse(mouseX,mouseY,30,30);
    }
}