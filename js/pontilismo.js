var pontilismoCanvas = new p5(sketch, 'pontilismo');
let urlImg = "https://s3-sa-east-1.amazonaws.com/www.eduardopedroso.com/imgs/b.jpg";
var imagemCarregada;
var circulosPontilismo = [];

function windowResized() {
    //canvasPontilismo.height = select('body').height;
    //canvasPontilismo.width = select('body').width;
    //pointillize(imagemCarregada);
}


function setup() {
    //print(frameRate());
    //pixelDensity(1);
    //canvasPontilismo = createCanvas(select('body').width, select('body').height);
    //canvasPontilismo.position(0, 0);
    //canvasPontilismo.style('z-index', '-1');
    //imageMode(CENTER);
    //imagemCarregada = loadImage(urlImg,
    //    function (img) {
    //        pointillize(img);
    //    },
    //    function () { print("erro imagem") });
    //print(frameRate());
}

function pointillizeArray(arrayCirculos) {
    for (let i = 0; i < arrayCirculos.length; i++) {
        fill(199, 211, 221, 255);
        stroke(199, 211, 221, 175);
        arrayCirculos[i].display();
    }
}

function pointillize(img) {
    let multSize = 0.2;
    if (select('body').height * multSize > select('body').width) {
        multSize = 0.18;
    }
    img.resize(select('body').height * multSize, 0);
    img.loadPixels();

    let posImgY = height - img.height * 3;

    for (let y = 0; y < img.height; y++) {
        for (let x = 0; x < img.width - img.width * 0.125; x++) {
            if (img.get(x, y)[0] && img.get(x, y)[1] && img.get(x, y)[2] < 97) {
                let circulo = new Circulo(x * 3, posImgY + y * 3, 2.3);
                fill(199, 211, 221, 255);
                stroke(199, 211, 221, 175);
                circulo.display();
                circulosPontilismo.push(circulo);
            }
        }
    }
}

function keyPressed() {
    clear();
    pointillizeArray(circulosPontilismo);
}

function draw() {
   
    //pointillizeArray(circulosPontilismo);
}