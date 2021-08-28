canvas=document.getElementById("my_Canvas");
ctx=canvas.getContext("2d");
mouseEvent="";
var lastPositionOfX,lastPositionOfY;
colour="Black";
widthOfLine=1;
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
mouseEvent="mousedown";
colour=document.getElementById("colour").value;
widthOfLine=document.getElementById("width").value;
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
currentpofX=e.clientX-canvas.offsetLeft;
currentpofY=e.clientY-canvas.offsetTop;
if(mouseEvent=="mousedown")
{
   
    ctx.beginPath();
    ctx.strokeStyle=colour;
    ctx.lineWidth=widthOfLine;
    ctx.moveTo(lastPositionOfX,lastPositionOfY);
    ctx.lineTo(currentpofX,currentpofY);
    ctx.stroke();
    console.log("lastPositionOfX"+lastPositionOfX+"lastPositionOfY"+lastPositionOfY+"currentpofX"+currentpofX+"currentpofY"+currentpofY);
}
lastPositionOfX=currentpofX;
lastPositionOfY=currentpofY;
}

function clearing(){
    ctx.clearRect(0,0,canvas.width,canvas.height);}