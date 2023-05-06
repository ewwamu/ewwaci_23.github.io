let img;


function setup() {
  let c = createCanvas(windowWidth, windowHeight);
  background("white");
  c.position(0, 0);
  img = loadImage('./assets/imgs/me.png');

}
//   noStroke();
//   fill("magenta")
//   ellipse(220, 200, 140, 150);
//   fill("magenta")
//   ellipse(160, 200, 50, 70);
//   fill("magenta")
//   ellipse(280, 200, 50, 70);
//   fill("blue")
//   rect(190, 160, 25, 5);
//   fill("blue")
//   rect(240, 160, 25, 5);
//   fill("blue")
//   circle(205, 190, 20);
//   fill("blue")
//   circle(255, 190, 20);
//   fill("blue")
//   circle(230, 205, 20);
//   fill("magenta");
//   arc(220, 325, 500, 100, PI, TWO_PI);
//   fill("lime")
//   rect(190, 220, 80, 150);
//   //ellipse(230, 240, 25, 35);
//   console.log("canvas", c);
//   stroke("black")
//   textSize(24);
//   text('click to give sam some teeth!', 20, 20, 400, 50);
// }

// function mouseClicked(){
//    stroke("black")
//   fill("black")
//   ellipse(mouseX, mouseY, 60, 50)
//   fill("black")
//   ellipse(mouseX, mouseY, 60, 50)
//   fill("white");
//   rect(mouseX-5, mouseY-5, 10, 10);
//   fill("red");
//     textSize(12);
//     text(s, mouseX, mouseY, 200, 200);
// }

// function draw() {
//   if (mouseIsPressed === true) {
//     fill("aqua");
    
//     // let h = random(0, 255);
//     // let s = random(0, 255);
//     // let l = random(0, 255);
//     // fill(h, s, l);
//     ellipse(mouseX, mouseY, 20, 50);
//     //rect(mouseX, mouseY, 20, 50)
//   }
// }


// var img;
 
// function preload()
// {
//   // load image
//   img = loadImage("./imgs/me.png");
// }
 

// function draw() {
//   if (mouseIsPressed === true) {
//     // fill("aqua");
    
//     // let h = random(0, 255);
//     // let s = random(0, 255);
//     // let l = random(0, 255);
//     // fill(h, s, l);
//     image(img, mouseX, mouseY, 0, 0); 
//     //rect(mouseX, mouseY, 20, 50)
//   }
// }

// function draw() {
//   if (mouseIsPressed === true) {
//   image(img, mouseX, mouseY);
//   }
// }


function mouseClicked(){
  image(img, mouseX, mouseY);
  }