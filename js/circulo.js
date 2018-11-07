function Circulo(ix, iy, d) {
    this.x = ix;
    this.y = iy;
    this.diametro = d;

    this.setDiametro = function (diam) {
        this.diametro = diam;
    }

    this.display = function () {
        ellipse(this.x, this.y, this.diametro);
    }
}