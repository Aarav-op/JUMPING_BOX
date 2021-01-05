var canvas;
var music;
var box1,box2,box3,box4
var ball,edges




function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    box1 = createSprite(0,580,360,30);
    box1.shapeColor = "red";

    box2 = createSprite(295,580,200,30);
    box2.shapeColor = "blue";

    box3 = createSprite(515,580,200,30);
    box3.shapeColor = "black";

    box4 = createSprite(740,580,220,30);
    box4.shapeColor = "green";

    ball = createSprite(random(20,750),100,40,40)
    ball.shapeColor = "white";
    ball.velocityX = 4;
    ball.velocityY = 9;

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges = createEdgeSprites();
    ball.bounceOff(edges);
    if(box1.isTouching(ball)&&ball.bounceOff(box1)){
        ball.shapeColor = "red";

    }
    if(box2.isTouching(ball)&&ball.bounceOff(box2)){
        ball.shapeColor = "blue";

    }
    if(box3.isTouching(ball)&&ball.bounceOff(box3)){
        ball.shapeColor = "black";

    }
    if(box4.isTouching(ball)&&ball.bounceOff(box4)){
        ball.shapeColor = "green";

    }
drawSprites();

    //add condition to check if box touching surface and make it box
}
