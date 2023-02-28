var forestimg,background 


function preload(){
bgImage = loadImage("forest.png");

}

function setup() {
    createCanvas(600,600);
    background = createSprite(600,300);
    background.addImage("forest.png",bgImage);
    background.velocityx = 1;

 
}

function draw() {
 
}