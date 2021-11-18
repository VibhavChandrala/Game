var box;
function setup() {
  createCanvas(400, 400);
  box = createSprite(100, 100, 20, 20);
  box.shapeColor = "blue";
  // box.velocityX=2;
}

function draw() {
  background("red");
  if (keyIsDown(RIGHT_ARROW)) {
    box.x = box.x + 2;
  }
  if (keyIsDown(LEFT_ARROW)) {
    box.x = box.x - 2;
  }
  if (keyIsDown(UP_ARROW)) {
    box.y = box.y - 2;
  }
  if (keyIsDown(DOWN_ARROW)) {
    box.y = box.y + 2;
  }
  drawSprites();
}




