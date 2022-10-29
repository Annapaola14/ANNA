let d= 100
let x= d/2
let y= d/2
let w= 400
let h= 400


function drawFlower(x,y,d){
	fill("green")
    noStroke()
	circle(x,y,d)
}
function setup(){
	createCanvas(400,400);
  background(200)
  frameRate(5)
}
function draw(){
	drawFlower(x,y,d)
	x= x+d
	if(x>=w){
	x=d/2
	y=y+d
	}
}