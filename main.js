var mouseEvent="empty";

var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="black";
width=1;
canvas.addEventListener("mousedown",my_mouseDown);

function my_mouseDown(e)
{
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    radius=document.getElementById("radius").value;
    mouseEvent="mouseDown";
}

canvas.addEventListener("mousemove",my_mouseMove);

function my_mouseMove(e)
{
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,2*Math.PI);

        ctx.stroke();
    }
}

canvas.addEventListener("mouseup",my_mouseUp);

function my_mouseUp(e)
{
    mouseEvent="mouseUp";
}

canvas.addEventListener("mouseleave",my_mouseLeave);

function my_mouseLeave(e)
{
    mouseEvent="mouseLeave";
}

function clearArea()
{
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}