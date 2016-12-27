var canvas;
var context;
var particles;
var textTimer;
var timer;
var circlePressed = false;
var squarePressed = false;
var trianglePressed = false;
var pentagonPressed = false;
var weirdPressed = false;
var randomPressed = false;
var piecesTouched = 0;


// Constructor (object) Circle function
function CircleParticle()
{
  // this. is the particular particle being manupliated at that particular time
  // Next two lines are for random postions
  // this.x = Math.random()*canvas.width;
  // this.y = Math.random()*canvas.height;
  this.x = canvas.width/2;
  this.y = canvas.height/2;
  // this will cause a center postion for each particle
  this.vx = Math.random()*10-5;
  this.vy = Math.random()*10-5;
  // array of colors
  this.color = "Aqua";
  this.radius = 15;
}

// Constructor (object) Square function
function SquareParticle()
{
  // this. is the particular particle being manupliated at that particular time
  // Next two lines are for random postions
  // this.x = Math.random()*canvas.width;
  // this.y = Math.random()*canvas.height;
  this.x = canvas.width/2;
  this.y = canvas.height/2;
  // this will cause a center postion for each particle
  this.vx = Math.random()*10-5;
  this.vy = Math.random()*10-5;
  // array of colors
  this.color = "dodgerblue";
  this.radius = 30;
}

// Constructor (object) Circle function
function TriangleParticle()
{
  // this. is the particular particle being manupliated at that particular time
  // Next two lines are for random postions
  // this.x = Math.random()*canvas.width;
  // this.y = Math.random()*canvas.height;
  this.x = canvas.width/2;
  this.y = canvas.height/2;
  // this will cause a center postion for each particle
  this.vx = Math.random()*10-5;
  this.vy = Math.random()*10-5;
  // array of colors
  this.color = "Chartreuse";
  this.radius = 30;
}

// constructor (object) Pentagon function
function PentagonParticle()
{
  // this. is the particular particle being manupliated at that particular time
  // Next two lines are for random postions
  // this.x = Math.random()*canvas.width;
  // this.y = Math.random()*canvas.height;
  this.x = canvas.width/2;
  this.y = canvas.height/2;
  // this will cause a center postion for each particle
  this.vx = Math.random()*10-5;
  this.vy = Math.random()*10-5;
  // array of colors
  this.color = "MediumSlateBlue ";
  this.radius = 30;
}

// constructor (object) weird function
function WeirdShapeParticle()
{
  // this. is the particular particle being manupliated at that particular time
  // Next two lines are for random postions
  // this.x = Math.random()*canvas.width;
  // this.y = Math.random()*canvas.height;
  this.x = canvas.width/2;
  this.y = canvas.height/2;
  // this will cause a center postion for each particle
  this.vx = Math.random()*10-5;
  this.vy = Math.random()*10-5;
  // array of colors
  this.color = "aqua";
  this.radius = 30;
}

// constructor (object) random function
function RandomShapeParticle()
{
  // this. is the particular particle being manupliated at that particular time
  // Next two lines are for random postions
  // this.x = Math.random()*canvas.width;
  // this.y = Math.random()*canvas.height;
  this.x = canvas.width/2;
  this.y = canvas.height/2;
  // this will cause a center postion for each particle
  this.vx = Math.random()*10-5;
  this.vy = Math.random()*10-5;
  // array of colors
  this.color = "white";
  this.radius = 30;
}


  // Begin function after page has fully loaded
  window.onload = function()
  {
    // Begining canavas init needed sections
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    var stopButton = document.getElementById('stopButton');
    document.getElementById('stopButton').style.visibility='hidden';
    // Stop Button Function
    stopButton.onclick = function()
    {
      document.getElementById('stopButton').style.visibility='hidden';
      document.getElementById('makeSquareButton').style.visibility='visible';
      window.location.reload(true);
    }

    // Circle initation and its button
    var makeCircleButton = document.getElementById('makeCircleButton');
    makeCircleButton.onclick = function()
    {
    circlePressed = true;
    makeCircleParticles();
    timer = setInterval(moveCircleParticles, textTimer +75);
    document.getElementById('makeCircleButton').style.visibility='hidden';
    document.getElementById('stopButton').style.visibility='visible';
    }

    // Square initation and its button
    var makeSquareButton = document.getElementById('makeSquareButton');
    makeSquareButton.onclick = function()
    {
    squarePressed = true;
    makeSquareParticles();
    timer = setInterval(moveSquareParticles, textTimer +75);
    document.getElementById('makeSquareButton').style.visibility='hidden';
    document.getElementById('stopButton').style.visibility='visible';
    }

    // Triangle initation and its button
    var makeTriangleButton = document.getElementById('makeTriangleButton');
    makeTriangleButton.onclick = function()
    {
    trianglePressed = true;
    makeTriangleParticles();
    timer = setInterval(moveTriangleParticles, textTimer +75);
    document.getElementById('makeTriangleButton').style.visibility='hidden';
    document.getElementById('stopButton').style.visibility='visible';
    }

    // Pentagon initation and its button
    var makePentagonButton = document.getElementById('makePentagonButton');
    makePentagonButton.onclick = function()
    {
    pentagonPressed = true
    makePentagonParticles();
    timer = setInterval(movePentagonParticles, textTimer +75);
    document.getElementById('makePentagonButton').style.visibility='hidden';
    document.getElementById('stopButton').style.visibility='visible';
    }

    // Pentagon initation and its button
    var makeWeirdShapeButton = document.getElementById('makeWeirdShapeButton');
    makeWeirdShapeButton.onclick = function()
    {
    weirdPressed = true;
    makeWeirdShapeParticles();
    timer = setInterval(moveWeirdShapeParticles, textTimer +75);
    document.getElementById('makeWeirdShapeButton').style.visibility='hidden';
    document.getElementById('stopButton').style.visibility='visible';
    }

    // Pentagon initation and its button
    var makeRandomShapeButton = document.getElementById('makeRandomShapeButton');
    makeRandomShapeButton.onclick = function()
    {
    randomPressed = true;
    makeRandomShapeParticles();
    timer = setInterval(moveRandomShapeParticles, textTimer +75);
    document.getElementById('makeRandomShapeButton').style.visibility='hidden';
    document.getElementById('stopButton').style.visibility='visible';
    }

    // Responsive canvas
    window.addEventListener("resize", resizeCanvas, false)
    window.addEventListener("orientationchange", resizeCanvas, false)
    resizeCanvas();

    drawText();
    textTimer = setInterval(drawText, 5500);

    // Wait for a click to check to see if objects have been created (to then delete)
    canvas.onclick = function(event)
    {
      handleClick(event.clientX, event.clientY);
    }
  }


  // Pushing new Circles into the canvas
  function makeCircleParticles()
  {
    clearTimeout(textTimer);
    context.clearRect(0, 0, canvas.width, canvas.height);
    // memeory managment by erasing the previous particle call of makeparticles
    circleParticles = [];
    for (var i = 0; i < 30; i++)
    {
      circleParticles.push(new CircleParticle());
    }
  }

  // Creating the animation and redrawing of each circle
  function moveCircleParticles()
  {
    // browser and css are handleing the next few lines
    context.globalCompositeOperation = "source-over";
    context.fillStyle = "rgba(0, 0, 0, 0.3)";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.globalCompositeOperation = "lighter";
    // Update score
    scoreText();
    // Creating Circle Particles
    for (var i = 0; i < circleParticles.length; i++)
    {
         var p = circleParticles[i];
         context.beginPath();
         context.arc(p.x, p.y, p.radius, 0, degreesToRadians(360), true);
         context.fillStyle = p.color;
         context.fill();
         p.x += p.vx;
         p.y += p.vy;
         p.radius -= .5;
         if (p.radius < 0)
         {
           p.radius = 15;
         }
         // wrap particle around screen other side
         if (p.x < -50){
             p.x = canvas.width + 50;
         }
         if (p.y < -50){
             p.y = canvas.height + 50;
         }
         if (p.x > canvas.width + 50){
             p.x = -50
         }
         if (p.y > canvas.height + 50){
             p.y = -50
         }
    }
  }


  // Pushing new Squares into the canvas
  function makeSquareParticles()
  {
    clearTimeout(textTimer);
    context.clearRect(0, 0, canvas.width, canvas.height);
    squareParticles = [];
    for (var i = 0; i < 30; i++)
    {
      squareParticles.push(new SquareParticle());
    }
  }

  // Creating the animation and redrawing of each square
  function moveSquareParticles()
  {
    // browser and css are handleing the next few lines
    context.globalCompositeOperation = "source-over";
    context.fillStyle = "rgba(0, 0, 0, 0.3)";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.globalCompositeOperation = "lighter";
    // Update score
    scoreText();
    // Creating Circle Particles
    for (var i = 0; i < squareParticles.length; i++)
    {
         var p = squareParticles[i];
         context.beginPath();
         context.rect(p.x, p.y,  p.radius, p.radius);
         p.radius -= .0001;
         context.fillStyle = p.color;
         context.fill();
         p.x += p.vx;
         p.y += p.vy;
         p.radius -= 1;
         if (p.radius < 0)
         {
           p.radius = 30;
         }
         // wrap particle around screen other side
         if (p.x < -50){
             p.x = canvas.width + 50;
         }
         if (p.y < -50){
             p.y = canvas.height + 50;
         }
         if (p.x > canvas.width + 50){
             p.x = -50
         }
         if (p.y > canvas.height + 50){
             p.y = -50
         }
    }
  }


  // Pushing new Triangle into the canvas
  function makeTriangleParticles()
  {
    clearTimeout(textTimer);
    context.clearRect(0, 0, canvas.width, canvas.height);
    triangleParticles = [];
    for (var i = 0; i < 30; i++)
    {
      triangleParticles.push(new TriangleParticle());
    }
  }

  // Creating the animation and redrawing of each triangle
  function moveTriangleParticles()
  {
    // browser and css are handleing the next few lines
    context.globalCompositeOperation = "source-over";
    context.fillStyle = "rgba(0, 0, 0, 0.3)";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.globalCompositeOperation = "lighter";
    // Update score
    scoreText();
    // Creating Triangle Particles
    for (var i = 0; i < triangleParticles.length; i++)
    {
        var p = triangleParticles[i];
        context.beginPath();
        context.moveTo(3.3  +  p.x,  3.3 + p.y);
        context.lineTo(8.3 + p.x, 25+ p.y);
        context.lineTo(25 + p.x, 25 + p.y);
        p.x += p.vx;
        p.y += p.vy;
        context.closePath();
        context.fillStyle = p.color;
        context.fill();
         // wrap particle around screen other side
         if (p.x < -50){
             p.x = canvas.width + 50;
         }
         if (p.y < -50){
             p.y = canvas.height + 50;
         }
         if (p.x > canvas.width + 50){
             p.x = -50
         }
         if (p.y > canvas.height + 50){
             p.y = -50
         }
    }
  }


  // Pushing new Triangle into the canvas
  function makePentagonParticles()
  {
    clearTimeout(textTimer);
    context.clearRect(0, 0, canvas.width, canvas.height);
    pentagonParticles = [];
    for (var i = 0; i < 30; i++)
    {
      pentagonParticles.push(new PentagonParticle());
    }
  }

  // Creating the animation and redrawing of each pentagon
  function movePentagonParticles()
  {
    // Browser and css are handleing the next few lines
    context.globalCompositeOperation = "source-over";
    context.fillStyle = "rgba(0, 0, 0, 0.3)";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.globalCompositeOperation = "lighter";
    // Update score
    scoreText();
    // Creating Triangle Particles
    for (var i = 0; i < pentagonParticles.length; i++)
    {
        var p = pentagonParticles[i];
        context.beginPath();
        context.moveTo(17  + p.x,  17 + p.y);
        context.lineTo(25  + p.x,  25+ p.y);
        context.lineTo(33 + p.x,  17 + p.y);
        context.lineTo(33 + p.x,  8 + p.y);
        context.lineTo(17  + p.x,  8 + p.y);
        p.x += p.vx;
        p.y += p.vy;
        context.closePath();
        context.fillStyle = p.color;
        context.fill();
         if (p.radius < 0)
         {
           p.radius = 30;
         }
         // wrap particle around screen other side
         if (p.x < -50){
             p.x = canvas.width + 50;
         }
         if (p.y < -50){
             p.y = canvas.height + 50;
         }
         if (p.x > canvas.width + 50){
             p.x = -50
         }
         if (p.y > canvas.height + 50){
             p.y = -50
         }
    }
  }

  // Pushing new weird shape into the canvas
  function makeWeirdShapeParticles()
  {
    clearTimeout(textTimer);
    context.clearRect(0, 0, canvas.width, canvas.height);
    weirdShapeParticles = [];
    for (var i = 0; i < 30; i++)
    {
      weirdShapeParticles.push(new WeirdShapeParticle());
    }
  }

  // Creating the animation and redrawing of each weird shape
  function moveWeirdShapeParticles()
  {
    // browser and css are handleing the next few lines
    context.globalCompositeOperation = "source-over";
    context.fillStyle = "rgba(0, 0, 0, 0.3)";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.globalCompositeOperation = "lighter";
    // Update score
    scoreText();
    // Creating Triangle Particles
    for (var i = 0; i < weirdShapeParticles.length; i++)
    {
        var p = weirdShapeParticles[i];
        context.beginPath();
        context.moveTo(18  + p.x,  17 + p.y);
        context.lineTo(12  + p.x,  25+ p.y);
        context.lineTo(9 + p.x,  17 + p.y);
        context.lineTo(8 + p.x,  8 + p.y);
        context.lineTo(10  + p.x,  8 + p.y);
        p.x += p.vx;
        p.y += p.vy;
        context.closePath();
        context.fillStyle = p.color;
        context.fill();
         if (p.radius < 0)
         {
           p.radius = 30;
         }
         // wrap particle around screen to other side
         if (p.x < -50){
             p.x = canvas.width + 50;
         }
         if (p.y < -50){
             p.y = canvas.height + 50;
         }
         if (p.x > canvas.width + 50){
             p.x = -50
         }
         if (p.y > canvas.height + 50){
             p.y = -50
         }
    }
  }

  // Pushing new random shape into the canvas
  function makeRandomShapeParticles()
  {
    clearTimeout(textTimer);
    context.clearRect(0, 0, canvas.width, canvas.height);
    randomShapeParticles = [];
    for (var i = 0; i < 30; i++)
    {
      randomShapeParticles.push(new RandomShapeParticle());
    }
  }

  // Creating the animation and redrawing of each random shape
  function moveRandomShapeParticles()
  {
    // browser and css are handleing the next few lines
    context.globalCompositeOperation = "source-over";
    context.fillStyle = "rgba(0, 0, 0, 0.3)";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.globalCompositeOperation = "lighter";
    // Update score
    scoreText();
    // Creating random shapes Particles
    for (var i = 0; i < randomShapeParticles.length; i++)
    {
        var p = randomShapeParticles[i];
        context.beginPath();
        context.moveTo(Math.random()*10-5  + p.x,  Math.random()*10-5 + p.y);
        context.lineTo(Math.random()*10-5  + p.x,  Math.random()*10-5+ p.y);
        context.lineTo(Math.random()*10-5 + p.x,  Math.random()*10-5 + p.y);
        context.lineTo(Math.random()*10-5 + p.x,  Math.random()*10-5 + p.y);
        context.lineTo(Math.random()*10-5  + p.x,  Math.random()*10-5 + p.y);
        p.x += p.vx;
        p.y += p.vy;
        context.closePath();
        context.fillStyle = p.color;
        context.fill();
         if (p.radius < 0)
         {
           p.radius = 30;
         }
         // wrap particle around screen to other side
         if (p.x < -50){
             p.x = canvas.width + 50;
         }
         if (p.y < -50){
             p.y = canvas.height + 50;
         }
         if (p.x > canvas.width + 50){
             p.x = -50
         }
         if (p.y > canvas.height + 50){
             p.y = -50
         }
    }
  }

  // update the score text each time a object has been touched
  function scoreText()
  {
    var text = piecesTouched;
    context.font = "bold 2em helvetica";
    context.lineWidth = 2;
    var grd=context.createLinearGradient(0,0,300,0);
    grd.addColorStop(0,"silver");
    grd.addColorStop(1,"teal");
    context.fillStyle = grd;
    context.strokeText(text, canvas.width-20, canvas.height-40);
    context.fillText(text, canvas.width-20, canvas.height-40);
  }

  // Make flashing text in the canvas
  function drawText()
  {
    context.clearRect(0, 0, canvas.width, canvas.height);
    //context.fillRect(0, 0, canvas.width, canvas.height);
    var dashLen = 50;
    var dashOffset = dashLen;
    var speed = 15;
    var text = "Click to collect shapes!";
    var x = 30, i = 0;
    context.font = "bold 2em helvetica";
    context.lineWidth = 2;

    (function drawingLoop()
    {
      var grd=context.createLinearGradient(0,0,300,0);
      grd.addColorStop(0,"aqua");
      grd.addColorStop(1,"MediumSlateBlue");
      context.textAlign = "center";
      context.fillStyle = grd;
      context.clearRect(x, 0, 0, 150);
      dashOffset -= speed;
      // stroke each letter
      context.strokeText(text[i], x, 90);
      // animate the text to screen
      if (dashOffset > 0)
        requestAnimationFrame(drawingLoop);
      else
      {
        // fill the colors in
        context.fillText(text[i], x, 90);
        dashOffset = dashLen;
        x += context.measureText(text[i++]).width + context.lineWidth * Math.random();
        if (i < text.length)
        requestAnimationFrame(drawingLoop);
      }
     })(); // end of drawing function within function
    }

  // Degree to radians
  function degreesToRadians(degrees)
  {
    return (degrees * Math.PI)/180;
  }

  // Responisive sizing to screen
  function resizeCanvas()
  {
    canvas.width = window.innerWidth-20;
    canvas.height = (window.innerHeight-20)*.75;
    drawText();
  }

  // Start clicking function
  // Checks to see if screen has object near it is actually created
  // Adds to a score counter
  // Removes the object from the screen
  function handleClick(x, y)
{
  // Check to make sure that the objects have been created from the button press
  if (circlePressed == true)
    for (var i = 0; i < circleParticles.length; i++)
    {
      d = Math.sqrt((circleParticles[i].x - x) *(circleParticles[i].x - x) +
      (circleParticles[i].y - y) *(circleParticles[i].y - y));
      if (d <= 15)
      {
        circleParticles.splice(i,1);
        piecesTouched ++;
      }
    }//end of circlePressed

  // Check to make sure that the objects have been created from the button press
  if (squarePressed == true)
  {
    // Check to make sure that the objects have been created from the button press
    for (var i = 0; i < squareParticles.length; i++)
    {
      d = Math.sqrt((squareParticles[i].x - x) *(squareParticles[i].x - x) +
      (squareParticles[i].y - y) *(squareParticles[i].y - y));
      if (d <= 15)
      {
        squareParticles.splice(i,1);
        piecesTouched ++;
      }
    }
  }//end of squarePressed

  // Check to make sure that the objects have been created from the button press
  if (trianglePressed == true)
  {
    // Check to make sure that the objects have been created from the button press
    for (var i = 0; i < triangleParticles.length; i++)
    {
      d = Math.sqrt((triangleParticles[i].x - x) *(triangleParticles[i].x - x) +
      (triangleParticles[i].y - y) *(triangleParticles[i].y - y));
      if (d <= 30)
      {
        triangleParticles.splice(i,1);
        piecesTouched ++;
      }
    }
  }//end of trianglePressed

  // Check to make sure that the objects have been created from the button press
  if (pentagonPressed == true)
  {
    // Check to make sure that the objects have been created from the button press
    for (var i = 0; i < pentagonParticles.length; i++)
    {
      d = Math.sqrt((pentagonParticles[i].x - x) *(pentagonParticles[i].x - x) +
      (pentagonParticles[i].y - y) *(pentagonParticles[i].y - y));
      if (d <= 30)
      {
        pentagonParticles.splice(i,1);
        piecesTouched ++;
      }
    }
  }//end of weird

  // Check to make sure that the objects have been created from the button press
  if (weirdPressed == true)
  {
    // Check to make sure that the objects have been created from the button press
    for (var i = 0; i < weirdShapeParticles.length; i++)
    {
      d = Math.sqrt((weirdShapeParticles[i].x - x) *(weirdShapeParticles[i].x - x) +
      (weirdShapeParticles[i].y - y) *(weirdShapeParticles[i].y - y));
      if (d <= 30)
      {
        weirdShapeParticles.splice(i,1);
        piecesTouched ++;
      }
    }
  }//end of weirdPressed

  // Check to make sure that the objects have been created from the button press
  if (randomPressed == true)
  {
    // Check to make sure that the objects have been created from the button press
    for (var i = 0; i < randomShapeParticles.length; i++)
    {
      d = Math.sqrt((randomShapeParticles[i].x - x) *(randomShapeParticles[i].x - x) +
      (randomShapeParticles[i].y - y) *(randomShapeParticles[i].y - y));
      if (d <= 30)
      {
        randomShapeParticles.splice(i,1);
        piecesTouched ++;
      }
    }
  }//end of weirdPressed
}
