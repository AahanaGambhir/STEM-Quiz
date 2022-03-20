var gameState = 0

function preload() {
  backgroundSTEM = loadImage("Images/backgroundImage.jpeg")
  backgroundSpace1 = loadImage("Images/backgroundSpace1.jpeg")
  backgroundSpace2 = loadImage("Images/backgroundSpace2.JPG")
  backgroundSpace3 = loadImage("Images/backgroundSpace3.JPG")
  backgroundBorder = loadImage("Images/backgroundBorder.jpeg")
  startButtonImage = loadImage("Images/StartButton.png")
  nextButtonImage = loadImage("Images/NextButtonImage.png")
  backButtonImage = loadImage("Images/BackButtonImage.png")
  correctAnswerImage = loadImage("Images/CorrectAnswer.gif")
  wrongAnswerImage = loadImage("Images/wrongAnswer.gif")
  q4Image = loadImage("Images/q4.jpg")
  q7Image = loadImage("Images/q7.jpg")
  q8Image = loadImage("Images/q8.png")
  endImage = loadImage("Images/End.png")
  endButtonImage = loadImage("Images/endButton.png")
  restartImage = loadImage("Images/restart1.png")
  
 
}
function setup() {
  createCanvas(1280, 610);
 start = createSprite(950, 490)
 start.addImage(startButtonImage)
 start.scale = 0.7
 start.visible = false

 correct = createSprite(600, 300)
 correct.addImage(correctAnswerImage)
 correct.scale = 4
 correct.visible = false

 wrong = createSprite(600, 250)
 wrong.addImage(wrongAnswerImage)
 wrong.scale = 1.5
 wrong.visible = false

 next = createSprite(1200, 530)
 next.addImage(nextButtonImage)
 next.scale = 0.1
 next.visible = false

 back = createSprite(100, 530)
 back.addImage(backButtonImage)
 back.scale = 0.5
 back.visible = false

 endButton = createSprite(1150, 530)
 endButton.addImage(endButtonImage)
 endButton.scale = 0.6
 endButton.visible = false

 restart = createSprite(1150, 500)
 restart.addImage(restartImage)
 restart.scale = 0.6
 restart.visible = false

 q4 = createSprite(500, 300)
 q4.addImage(q4Image)
 q4.scale = 0.2
 q4.visible = false

 q7 = createSprite(500, 300)
 q7.addImage(q7Image)
 q7.scale = 0.2
 q7.visible = false

 q8 = createSprite(600, 300)
 q8.addImage(q8Image)
 q8.scale = 0.3
 q8.visible = false

 end = createSprite(600, 300)
 end.addImage(endImage)
 end.scale = 1.3
 end.visible = false


 q1A = createSprite(630, 293, 550, 20)
 q1A.visible = false

 q1B = createSprite(610, 340, 550, 20)
 q1B.visible = false

 q1C = createSprite(630, 390, 540, 20)
 q1C.visible = false


 q4A = createSprite(560, 390, 250, 20)
 q4A.visible = false

 q4B = createSprite(560, 440, 250, 20)
 q4B.visible = false

 q4C = createSprite(560, 490, 250, 20)
 q4C.visible = false



 q6A = createSprite(300, 310, 150, 20)
 q6A.visible = false

 q6B = createSprite(300, 360, 180, 20)
 q6B.visible = false

 q6C = createSprite(300, 410, 150, 20)
 q6C.visible = false
 }

function draw() {
background("black"); 

if(gameState === 0 ) {
  background(backgroundSTEM)

  start.visible = true


  textSize(25)
  fill("black")
  strokeWeight(2)
  stroke("pink")
  textFont("Curlz MT")
  textStyle(BOLDITALIC)
  text("Fun Fact - Mostly STEM workers are highly educated, but about 1/3 have not graduted college", 200, 50)
  
  textSize(28)
  fill("black")
  strokeWeight(2)
  stroke("pink")
  textFont("Curlz MT")
  textStyle(BOLDITALIC)
  text("Wanna do a fun quiz on STEM??!!", 450, 450)

  textSize(28)
  fill("black")
  strokeWeight(2)
  stroke("pink")
  textFont("Curlz MT")
  textStyle(BOLDITALIC)
  text("Well then, what are you waiting for press", 370, 500)

  if(mousePressedOver(start) && gameState === 0 ) {
    gameState = 1;
    start.visible = false

    
  }
 
}


if(gameState === 1) {
 
  background(backgroundBorder);
  
  q1A.visible = false
  q1B.visible = false
  q1C.visible = false
  q4.visible = false
  q7.visible = false
  q8.visible = false
  q4A.visible = false
  q4B.visible = false
  q4C.visible = false

  textSize(28)
  fill("red")
  textFont("Curlz MT")
  textStyle(BOLDITALIC)
  text("Q. What is the full form of STEM?" ,400, 200)

  textSize(28)
  fill("black")
  textFont("Curlz MT")
  textStyle(BOLD)
  text("a.  Science, Technology, Engineering and Math", 350, 300)

  textSize(28)
  fill("black")
  textFont("Curlz MT")
  textStyle(BOLD)
  text("b.  Something, That, Everything and Maybe", 350, 350)

  textSize(28)
  fill("black")
  textFont("Curlz MT")
  textStyle(BOLD)
  text("c.  Science, Technology, Energy and Music", 350, 400)

  if(mousePressedOver(q1A) && gameState === 1) {
    gameState = 10
  }

  if(mousePressedOver(q1B) && gameState === 1) {
    gameState = 17
    wrong.visible = false
 
  }

  if(mousePressedOver(q1C) && gameState === 1) {
    gameState = 17
    
  }



 
}


if(gameState === 2) {
 
  background(backgroundBorder)

  q1A.visible = false
  q1B.visible = false
  q1C.visible = false

  textSize(28)
  fill("red")
  textFont("Curlz MT")
  textStyle(BOLDITALIC)
  text("Q. What does SCIENCE in STEM mean?" ,430, 200)

  textSize(28)
  fill("black")
  textFont("Curlz MT")
  textStyle(BOLD)
  text("a.  Observing, experimenting, making predictions, asking question", 200, 300)

  textSize(28)
  fill("black")
  textFont("Curlz MT")
  textStyle(BOLD)
  text("b.  Being inventive, making things work, identifying issues, using computers", 200, 350)

  textSize(28)
  fill("black")
  textFont("Curlz MT")
  textStyle(BOLD)
  text("c.  Solving problems, using materials, designing and creating building", 200, 400)

  if(mousePressedOver(q1A) && gameState === 2) {
    gameState = 11
  }

  if(mousePressedOver(q1B) && gameState === 2) {
    gameState = 18
  }

  if(mousePressedOver(q1C) && gameState === 2) {
    gameState = 18
  }


}




if(gameState === 3) {
 

  background(backgroundBorder)  
  q1A.visible = false
  q1B.visible = false
  q1C.visible = false

  textSize(28)
  fill("red")
  textFont("Curlz MT")
  textStyle(BOLDITALIC)
  text("Q. Which unit of memory can take the largest amount of data?" ,350, 200)

  textSize(28)
  fill("black")
  textFont("Curlz MT")
  textStyle(BOLD)
  text("a.  1GB", 430, 300)

  textSize(28)
  fill("black")
  textFont("Curlz MT")
  textStyle(BOLD)
  text("b.  1TB", 430, 350)

  textSize(28)
  fill("black")
  textFont("Curlz MT")
  textStyle(BOLD)
  text("c.  1KB", 430, 400)

  if(mousePressedOver(q1A) && gameState === 3) {
    gameState = 19
  }

  if(mousePressedOver(q1B) && gameState === 3) {
    gameState = 12
  }

  if(mousePressedOver(q1C) && gameState === 3) {
    gameState = 19
  }


}






if(gameState === 4) {
 

  background(backgroundBorder)
  q4A.visible = false
  q4B.visible = false
 q4C.visible = false
  q4.visible = true


  textSize(28)
  fill("red")
  textFont("Curlz MT")
  textStyle(BOLDITALIC)
  text("Q. Identify the person in the picture." ,450, 200)
   
 

  textSize(28)
  fill("black")
  textFont("Curlz MT")
  textStyle(BOLD)
  text("a.  John von Neumann", 430, 400)

  textSize(28)
  fill("black")
  textFont("Curlz MT")
  textStyle(BOLD)
  text("b.  Alan Turing", 430, 450)

  textSize(28)
  fill("black")
  textFont("Curlz MT")
  textStyle(BOLD)
  text("c.  Girolamo Cardano", 430, 500)

  if(mousePressedOver(q4A) && gameState === 4) {
    gameState = 20
  }

  if(mousePressedOver(q4B) && gameState === 4) {
    gameState = 13
  }

  if(mousePressedOver(q4C) && gameState === 4) {
    gameState = 20
  }


}




if(gameState === 5) {
 
  background(backgroundBorder)  
  q1A.visible = false
  q1B.visible = false
  q1C.visible = false

  textSize(28)
  fill("red")
  textFont("Curlz MT")
  textStyle(BOLDITALIC)
  text("Q. What is engineering?" ,450, 200)

  textSize(28)
  fill("black")
  textFont("Curlz MT")
  textStyle(BOLD)
  text("a.  Scientology", 450, 300)

  textSize(28)
  fill("black")
  textFont("Curlz MT")
  textStyle(BOLD)
  text("b.  Study of something", 450, 350)

  textSize(28)
  fill("black")
  textFont("Curlz MT")
  textStyle(BOLD)
  text("c.  Design and Modeling", 450, 400)

  if(mousePressedOver(q1A) && gameState === 5) {
    gameState = 21
  }

  if(mousePressedOver(q1B) && gameState === 5) {
    gameState = 21
  }

  if(mousePressedOver(q1C) && gameState === 5) {
    gameState = 14
  }


}





if(gameState === 6) {
 

  background(backgroundBorder)
  q6A.visible = false
  q6B.visible = false
  q6C.visible = false

  textSize(28)
  fill("red")
  textFont("Curlz MT")
  textStyle(BOLDITALIC)
  text("Q. ______ engineers design and develop electronic parts and system. " ,200, 200)
  
  textSize(28)
  fill("black")
  textFont("Curlz MT")
  textStyle(BOLD)
  text("a.  Aerospace", 220, 320)

  textSize(28)
  fill("black")
  textFont("Curlz MT")
  textStyle(BOLD)
  text("b.  Mechanical", 220, 370)

  textSize(28)
  fill("black")
  textFont("Curlz MT")
  textStyle(BOLD)
  text("c.   Electronics", 220, 420)

  if(mousePressedOver(q6A) && gameState === 6) {
    gameState = 22
  }

  if(mousePressedOver(q6B) && gameState === 6) {
    gameState = 22
  }

  if(mousePressedOver(q6C) && gameState === 6) {
    gameState = 15
  }


}








if(gameState === 7) {
 

  background(backgroundBorder)
  q4A.visible = false
  q4B.visible = false
  q4C.visible = false
  q7.visible = true


  textSize(28)
  fill("red")
  textFont("Curlz MT")
  textStyle(BOLDITALIC)
  text("Q. Find angle x" ,450, 200)
   
 

  textSize(28)
  fill("black")
  textFont("Curlz MT")
  textStyle(BOLD)
  text("a. 118°", 430, 400)

  textSize(28)
  fill("black")
  textFont("Curlz MT")
  textStyle(BOLD)
  text("b.  28°", 430, 450)

  textSize(28)
  fill("black")
  textFont("Curlz MT")
  textStyle(BOLD)
  text("c.  12°", 430, 500)

  if(mousePressedOver(q4A) && gameState === 7) {
    gameState = 23
  }

  if(mousePressedOver(q4B) && gameState === 7) {
    gameState = 16
  }

  if(mousePressedOver(q4C) && gameState === 7) {
    gameState = 23
  }


}





if(gameState === 8) {
 
  background(backgroundBorder)
  end.visible = false
  q4A.visible = false
  q4B.visible = false
  q4C.visible = false
  q8.visible = true


  textSize(28)
  fill("red")
  textFont("Curlz MT")
  textStyle(BOLDITALIC)
  text("Q. What is the value of star?" ,450, 200)
   
 

  textSize(28)
  fill("black")
  textFont("Curlz MT")
  textStyle(BOLD)
  text("a.  04", 430, 400)

  textSize(28)
  fill("black")
  textFont("Curlz MT")
  textStyle(BOLD)
  text("b.  10", 430, 450)

  textSize(28)
  fill("black")
  textFont("Curlz MT")
  textStyle(BOLD)
  text("c.  08", 430, 500)

  if(mousePressedOver(q4A) && gameState === 8) {
    gameState = 24
  }

  if(mousePressedOver(q4B) && gameState === 8) {
    gameState = 24
  }

  if(mousePressedOver(q4C) && gameState === 8) {
    gameState = 25
    correct.visible = false
  }


}


 if(gameState === 9) {
   end.visible = true

 }




if(gameState === 10) {
  correct.visible = true

  
  next.visible = true
  if(mousePressedOver(next) && gameState === 10) {
    gameState = 2
    correct.visible = false
    next.visible = false
  }

  q1A.visible = false
  q1B.visible = false
  q1C.visible = false

  q4A.visible = false
  q4B.visible = false
  q4C.visible = false

  q4.visible = false
  q7.visible = false
  q8.visible = false
  end.visible = false
}
if(gameState === 17) {
  wrong.visible = true

  next.visible = true
  if(mousePressedOver(next) && gameState === 17) {
    gameState = 2
    wrong.visible = false
    next.visible = false
  }

  textSize(28)
  fill("red")
  textFont("Curlz MT")
  textStyle(BOLD)
  text("Correct answer:   a.  Science, Technology, Engineering and Math", 250, 580)

  q1A.visible = false
  q1B.visible = false
  q1C.visible = false

  q4A.visible = false
  q4B.visible = false
  q4C.visible = false

  q4.visible = false
  q7.visible = false
  q8.visible = false
}







if(gameState === 11) {
  correct.visible = true

  next.visible = true
  if(mousePressedOver(next) && gameState === 11) {
    gameState = 3
    correct.visible = false
    next.visible = false
  }

  q1A.visible = false
  q1B.visible = false
  q1C.visible = false

  q4A.visible = false
  q4B.visible = false
  q4C.visible = false

  q4.visible = false
  q7.visible = false
  q8.visible = false
  end.visible = false
}
if(gameState === 18) {
  wrong.visible = true

  next.visible = true
  if(mousePressedOver(next) && gameState === 18) {
    gameState = 3
    wrong.visible = false
    next.visible = false
  }

  textSize(28)
  fill("red")
  textFont("Curlz MT")
  textStyle(BOLD)
  text("Correct answer:   a.  obserning, experimenting, making predictions, asking question", 150, 580)

  q1A.visible = false
  q1B.visible = false
  q1C.visible = false

  q4A.visible = false
  q4B.visible = false
  q4C.visible = false

  q4.visible = false
  q7.visible = false
  q8.visible = false
}








if(gameState === 12) {
  correct.visible = true

  next.visible = true
  if(mousePressedOver(next) && gameState === 12) {
    gameState = 4
    correct.visible = false
    next.visible = false
  }

  q1A.visible = false
  q1B.visible = false
  q1C.visible = false

  q4A.visible = false
  q4B.visible = false
  q4C.visible = false

  q4.visible = false
  q7.visible = false
  q8.visible = false
  end.visible = false
}
if(gameState === 19) {
  wrong.visible = true

  next.visible = true
  if(mousePressedOver(next) && gameState === 19) {
    gameState = 4
    wrong.visible = false
    next.visible = false
  }

  textSize(28)
  fill("red")
  textFont("Curlz MT")
  textStyle(BOLD)
  text("Correct answer:   b.  1TB", 500, 550)

  q1A.visible = false
  q1B.visible = false
  q1C.visible = false

  q4A.visible = false
  q4B.visible = false
  q4C.visible = false

  q4.visible = false
  q7.visible = false
  q8.visible = false
}




if(gameState === 13) {
  correct.visible = true

  next.visible = true
  if(mousePressedOver(next) && gameState === 13) {
    gameState = 5
    correct.visible = false
    next.visible = false
  }

  q1A.visible = false
  q1B.visible = false
  q1C.visible = false

  q4A.visible = false
  q4B.visible = false
  q4C.visible = false

  q4.visible = false
  q7.visible = false
  q8.visible = false
  end.visible = false
}
if(gameState === 20) {
  wrong.visible = true

  next.visible = true
  if(mousePressedOver(next) && gameState === 20) {
    gameState = 5
    wrong.visible = false
    next.visible = false
  }

  textSize(28)
  fill("red")
  textFont("Curlz MT")
  textStyle(BOLD)
  text("Correct answer:   b.  Alan Turing", 500, 550)

  q1A.visible = false
  q1B.visible = false
  q1C.visible = false

  q4A.visible = false
  q4B.visible = false
  q4C.visible = false

  q4.visible = false
  q7.visible = false
  q8.visible = false
}




if(gameState === 14) {
  correct.visible = true

  next.visible = true
  if(mousePressedOver(next) && gameState === 14) {
    gameState = 6
    correct.visible = false
    next.visible = false
  }

  q1A.visible = false
  q1B.visible = false
  q1C.visible = false

  q4A.visible = false
  q4B.visible = false
  q4C.visible = false

  q4.visible = false
  q7.visible = false
  q8.visible = false
  end.visible = false
}
if(gameState === 21) {
  wrong.visible = true

  next.visible = true
  if(mousePressedOver(next) && gameState === 21) {
    gameState = 6
    wrong.visible = false
    next.visible = false
  }

  textSize(28)
  fill("red")
  textFont("Curlz MT")
  textStyle(BOLD)
  text("Correct answer:   c.  Design and Modeling", 400, 550)

  q1A.visible = false
  q1B.visible = false
  q1C.visible = false

  q4A.visible = false
  q4B.visible = false
  q4C.visible = false

  q4.visible = false
  q7.visible = false
  q8.visible = false
}




if(gameState === 15) {
  correct.visible = true

  next.visible = true
  if(mousePressedOver(next) && gameState === 15) {
    gameState = 7
    correct.visible = false
    next.visible = false
  }

  q1A.visible = false
  q1B.visible = false
  q1C.visible = false

  q4A.visible = false
  q4B.visible = false
  q4C.visible = false

  q4.visible = false
  q7.visible = false
  q8.visible = false
  end.visible = false
}
if(gameState === 22) {
  wrong.visible = true

  next.visible = true
  if(mousePressedOver(next) && gameState === 22) {
    gameState = 7
    wrong.visible = false
    next.visible = false
  }

  textSize(28)
  fill("red")
  textFont("Curlz MT")
  textStyle(BOLD)
  text("Correct answer:   c.  Electronics", 500, 550)

  q1A.visible = false
  q1B.visible = false
  q1C.visible = false

  q4A.visible = false
  q4B.visible = false
  q4C.visible = false

  q6A.visible = false
  q6B.visible = false
  q6C.visible = false


  q4.visible = false
  q7.visible = false
  q8.visible = false
}




if(gameState === 16) {
  correct.visible = true

  next.visible = true
  if(mousePressedOver(next) && gameState === 16) {
    gameState = 8
    correct.visible = false
    next.visible = false
  }

  q1A.visible = false
  q1B.visible = false
  q1C.visible = false

  q4A.visible = false
  q4B.visible = false
  q4C.visible = false

  q4.visible = false
  q7.visible = false
  q8.visible = false
  end.visible = false
}
if(gameState === 23) {
  wrong.visible = true

  next.visible = true
  if(mousePressedOver(next) && gameState === 23) {
    gameState = 8
    wrong.visible = false
    next.visible = false
  }

  textSize(28)
  fill("red")
  textFont("Curlz MT")
  textStyle(BOLD)
  text("Correct answer:   b.  28 degree", 500, 550)

  q1A.visible = false
  q1B.visible = false
  q1C.visible = false

  q4A.visible = false
  q4B.visible = false
  q4C.visible = false

  q4.visible = false
  q7.visible = false
  q8.visible = false
}




if(gameState === 25) {
  correct.visible = true


  endButton.visible = true
  if(mousePressedOver(endButton) && gameState === 25) {
    gameState = 9
    correct.visible = false
    next.visible = false
    endButton.visible = false
  }

  q1A.visible = false
  q1B.visible = false
  q1C.visible = false

  q4A.visible = false
  q4B.visible = false
  q4C.visible = false

  q4.visible = false
  q7.visible = false
  q8.visible = false
  end.visible = false
}
if(gameState === 24) {
  wrong.visible = true

  correct.visible = false

  
 endButton.visible = true
  if(mousePressedOver(endButton) && gameState === 24) {
    gameState = 9
    wrong.visible = false
    next.visible = false
    endButton.visible = false
  }

  textSize(28)
  fill("red")
  textFont("Curlz MT")
  textStyle(BOLD)
  text("Correct answer:   c.  08", 500, 550)

  q1A.visible = false
  q1B.visible = false
  q1C.visible = false

  q4A.visible = false
  q4B.visible = false
  q4C.visible = false

  q4.visible = false
  q7.visible = false
  q8.visible = false
}


drawSprites();
}


