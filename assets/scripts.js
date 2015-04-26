// define namespace
app = {};

//mke the canvas and the 2d context
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

// set canvas width and height to be that of the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//add the canvas to the html body
document.body.appendChild(canvas);

