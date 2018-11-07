var perlinCanvas = new p5(sketch, 'perlin');
let noiseScale = 0.02;

let shakeThreshold = 30;
let circulosPerlinShake = [];
let circulosPerlin = [];
let tamanhoFinal = 1;

var sketch = function (p) {
    p.setup = function () {
        p.createCanvas(select('body').width, select('body').height);
        background(40);
    }
};


function stopBodyScrolling(bool) {
    if (bool === true) {
        document.body.addEventListener("touchmove", freezeVp, false);
    } else {
        document.body.removeEventListener("touchmove", freezeVp, false);
    }
}

var freezeVp = function (e) {
    e.preventDefault();
};

function windowResized() {
    resizeCanvas(select('body').width, select('body').height);
    drawPerlin();
    pointillize(imagemCarregada);
}

function setup() {
    stopBodyScrolling(true);
    frameRate(30);
    pixelDensity(1);
    new p5(sketch, 'pontilismo');
    canvas = createCanvas(select('body').width, select('body').height);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    imageMode(CENTER);
    imagemCarregada = loadImage(urlImg,
        function (img) {
            pointillize(img);
        },
        function () { print("erro imagem") });

    drawPerlin();
}

function drawPerlin() {
    noiseDetail(3, 0.48);
    let maxY = floor(height / 3);
    let maxX = floor(width / 3);

    for (let y = 0; y < maxY; y++) {
        for (let x = 0; x < maxX; x++) {
            let noiseVal = noise(x * noiseScale, y * noiseScale);
            if (noiseVal > 0.5) {
                let circulo = new Circulo(x * 3, y * 3, 0.5);
                fill(199, 211, 221, 255);
                stroke(199, 211, 221, 140);
                circulo.display();
                circulosPerlin.push(circulo);
            }
        }
    }
    circulosPerlinShake = circulosPerlin;
}

function keyPressed() {
    clear();
    drawPerlin();
    shakeIncrement = 0;
}

function hasShakedDevice() {
    // Calculate total change in accelerationX and accelerationY
    let accChangeX = abs(accelerationX - pAccelerationX);
    let accChangeY = abs(accelerationY - pAccelerationY);
    let accChangeT = accChangeX + accChangeY;
    // If shake
    if (accChangeT >= shakeThreshold) {
        return true;
    } else {
        return false;
    }

}

function draw() {

    //if (mouseIsPressed) {
    //    push();
    //    stroke(250, 243, 221, 255);
    //    strokeWeight(15);
    //    line(pmouseX, pmouseY, mouseX, mouseY);
    //    pop();
    //}

    clear();

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        //panElements(accelerationX - pAccelerationX, accelerationY - pAccelerationY);
        panElements(mouseX - pmouseX, mouseY - pmouseY);
    } else {
        panElements(mouseX - pmouseX, mouseY - pmouseY);
    }

    if (hasShakedDevice()) {
        shakeIncrement = 0;
        drawPerlin();
    }

    if (circulosPerlin.length > 0) {
        crescerCirculos();
    }
    
}

function crescerCirculos() {
    for (var i = 0; i < 30; i++) {
        let c = floor(random(0, circulosPerlin.length - 1));
        circulosPerlin[c].setDiametro(tamanhoFinal);
        circulosPerlin[c].display();
        circulosPerlin.splice(c, 1);
    }
}

let shakeLimit = 100;
let shakeIncrementX = 0;
let shakeIncrementY = 0;

function panElements(x, y, elements) {
    
    

    //let incrementX, incrementY;
    //shakeIncrementX += x;
    //shakeIncrementX = constrain(-shakeLimit, shakeLimit, shakeIncrementX);
    //shakeIncrementY += y;
    //shakeIncrementY = constrain(-shakeLimit, shakeLimit, shakeIncrementY);

    //if (abs(shakeIncrementX) < shakeLimit) {
    //    incrementX = shakeIncrementX - shakeLimit;
    //}
    //else {
    //    incrementX = 0;
    //}
    //if (abs(shakeIncrementY) < shakeLimit) {
    //    incrementY = shakeIncrementY - shakeLimit;
    //} else {
    //    incrementY = 0;
    //}

    for (var i = 0; i < circulosPerlinShake.length; i++) {
        //circulosPerlinShake[i].x += x;
        //circulosPerlinShake[i].y += y;
        circulosPerlinShake[i].display();
    }
}