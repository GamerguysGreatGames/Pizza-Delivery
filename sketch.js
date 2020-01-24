var car;
var rocks;
var score=0;
var lives=5
var timer=0;
var play=false;
var screen
var swap
var lazer=10
var time=2400
var l=0
var spr=0;
var sx;
var sy
var deliver=false;
var score=0
function setup() {
screen=createSprite(200,200,400,400);
screen.visible=false;
car=createSprite(200,200,25,25);
lazers=createGroup();
stars=createGroup();
img=loadImage("car.png")
car.addImage(img)
car.scale=0.5
rocks=createGroup();
house=createSprite(600,600,0,0)
water=createGroup();
group=createGroup();
}

function draw() {
if (car.x>395){car.x=5;}
if (car.x<5){car.x=395;}
if (car.y>395){car.y=5;}
if (car.y<5){car.y=395;}
screen.x=200;
screen.y=200;
background("green");
if (play==false){
textAlign(CENTER)
fill("black")
textSize(30)
text("Pizza Delivery DX!",200,50)
textSize(20);
text("Press P to Play",200,150)
if (keyDown("p")){play=true;
shop=createSprite(random(50,350),random(50,350),0,0)
img=loadImage("pizza_shop.png")
shop.addImage(img)
shop.scale=3}
}else{
if (time<0){window.alert("Your final score is:"+score);if(eee==false){}}
rocks.displace(car)
rocks.displace(rocks)
house.displace(rocks)
shop.displace(rocks)
water.displace(rocks)
rocks.displace(water)
shop.displace(water)
house.displace(water)
drawSprites();
fill("black")
textSize(20)
if (car.isTouching(house)){if (deliver==true){score++;house.visible=false;deliver=false;shop.visible=true;}}
if (car.isTouching(shop)){if(deliver==false){l=0
rocks.destroyEach()
while(4>l){
swap=createSprite(random(25,375),random(25,375),30,30)
img=loadImage("tree.png")
swap.addImage(img)
l++;
rocks.add(swap)}
l=0
water.destroyEach()
while(3>l){
swap=createSprite(random(25,375),random(25,375),30,30)
img=loadImage("water.png")
swap.addImage(img)
l++;
water.add(swap)}                                      
deliver=true;house.destroy();house=createSprite(random(25,375),random(25,375),0,0);shop.visible=false;img=loadImage("house.png");house.addImage(img)}}
text("Time:"+Math.round(time/60)+" Score:"+score,50,50)
time--;
group.clear()
group.add(car)
drawSprites(group)
carset();
if (car.isTouching(water)){car.velocityX=car.velocityX/1.5;car.velocityY=car.velocityY/1.5}
}
}
function carset(){
if (keyDown("s")){
if (lazer>0){
lazer--;
swap=createSprite(car.x,car.y,5,5);
swap.shapeColor="green";
swap.rotation=car.rotation
if (swap.rotation==90){swap.velocityX=6;}else{
if (swap.rotation==180){swap.velocityY=6;}else{
if (swap.rotation==270){swap.velocityX=-6;}else{
if (swap.rotation==360){swap.velocityY=-6;}else{
if(swap.rotation==0){swap.velocityY=-5;}else{
if (swap.rotation<90){if (swap.rotation>0)
{swap.velocityX=Math.abs(swap.rotation)/15;
swap.velocityY=0-Math.abs(90-swap.rotation)/15}}
if (swap.rotation<180){if (swap.rotation>90)
{swap.velocityX=Math.abs(swap.rotation-180)/15;
swap.velocityY=Math.abs(90-swap.rotation)/15}}
if (swap.rotation<270){if (swap.rotation>180)
{swap.velocityX=0-Math.abs(swap.rotation-180)/15;
swap.velocityY=Math.abs(270-swap.rotation)/15}}
if (swap.rotation<360){if (swap.rotation>270)
{swap.velocityX=0-Math.abs(360-swap.rotation)/15;
swap.velocityY=0-Math.abs(swap.rotation-270)/15}}}}}}}
lazers.add(swap)}}
if (car.rotation>360){car.rotation=360}
if (car.rotation<0){car.rotation=0}
if(keyDown("LEFT_ARROW")){
car.velocityX=0;
car.velocityY=0;
if (car.rotation==0){car.rotation=360}
car.rotation=car.rotation-7;}
if(keyDown("RIGHT_ARROW")){
car.velocityX=0;
car.velocityY=0;
if (car.rotation==360){car.rotation=0}
car.rotation=car.rotation+7;}
if (keyDown("UP_ARROW")){
if (car.rotation==90){car.velocityX=6;}else{
if (car.rotation==180){car.velocityY=6;}else{
if (car.rotation==270){car.velocityX=-6;}else{
if (car.rotation==360){car.velocityY=-6;}else{
if(car.rotation==0){car.velocityY=-5;}else{
if (car.rotation<90){if (car.rotation>0)
{car.velocityX=Math.abs(car.rotation)/10;
car.velocityY=0-Math.abs(90-car.rotation)/10}}
if (car.rotation<180){if (car.rotation>90)
{car.velocityX=Math.abs(car.rotation-180)/10;
car.velocityY=Math.abs(90-car.rotation)/10}}
if (car.rotation<270){if (car.rotation>180)
{car.velocityX=0-Math.abs(car.rotation-180)/10;
car.velocityY=Math.abs(270-car.rotation)/10}}
if (car.rotation<360){if (car.rotation>270)
{car.velocityX=0-Math.abs(360-car.rotation)/10;
car.velocityY=0-Math.abs(car.rotation-270)/10}}
}}}}}}else{
if (car.velocityX>0){car.velocityX=car.velocityX-0.25;}
if (car.velocityY>0){car.velocityY=car.velocityY-0.25}
if (car.velocityX<0){car.velocityX=car.velocityX+0.25;}
if (car.velocityY<0){car.velocityY=car.velocityY+0.25}}}
