function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Exercise 1:
    drawCircle();

    // Exercise 2: 
    drawOval(100, 200, 200, 125, 'teal');
    drawOval(200, 200, 125, 200, 'hotpink');
    drawOval(300, 200, 200, 125, 'navy');
    drawOval(400, 200, 125, 200, 'teal');

    // Exercise 3:
    drawBullseye(100, 300, 200);
    drawBullseye(200, 300, 100);
    drawBullseye(300, 300, 200);
    drawBullseye(400, 300, 100);

    // Exercise 4:
    drawFace(100,400,50)
    drawFace(100, 400, 100);
    drawFace(300, 400, 200, 'lavender');
    drawFace(400, 400, 100);
    drawFace(600, 400, 250);

    drawGrid(canvasWidth, canvasHeight);
}


// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, size, and fillColor
function drawCircle() {
    fill('hotpink');
    circle(100, 100, 100);
}

// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, sizeX, sizeY, and fillColor
function drawOval() {
    fill('teal');
    ellipse(100, 200, 100, 62.5);
}


// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawBullseye() {
    fill('teal');
    circle(100, 300, 100);
    fill('navy');
    circle(100, 300, 75);
    fill('teal');
    circle(100, 300, 50);
    fill('navy');
    circle(100, 300, 25);
}

// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawFace(centerX, centerY, size, faceColor='yellow') {
    fill(faceColor);
    circle(centerX, centerY, size); // 100, 400, 50
    fill('black');
    let sf = size/ 6.3;
    circle(centerX- sf, centerY-sf, sf); // left eye
    circle(centerX+sf, centerY-sf, sf); //right eye
    
    //make a mouth
    strokeWeight(size / 30);
    line(
        centerX -sf*2,
        centerY +sf,
        centerX + sf*1.9,
        centerY+ sf, 
    )
    arc(100,100,100,200, 1,1.5,OPEN);
}
noFill()
stroke('black');
curve(
    centerX -sf*2, centerY - size,
    centerX -sf*2, centerY +sf,
    centerX +sf*2, centerY +sf,
    centerX +sf*2, centerY - size
);