canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent = "empty";
var lastx;
var lasty;
color = "lime";

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    mouseEvent = "mousedown";
    color = document.getElementById("color").value;
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x = e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY-canvas.offsetTop;

    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        
        console.log("last position of x and y");
        console.log("x = "+lastx+"y = "+lasty);
        ctx.moveTo(lastx, lasty);

        console.log("current position of x and y");
        console.log("x = "+current_position_of_mouse_x+"y = "+current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }
    lastx = current_position_of_mouse_x;
    lasty = current_position_of_mouse_y;
}
canvas.addEventListener("mousedleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseup";
}

function clearArea(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}