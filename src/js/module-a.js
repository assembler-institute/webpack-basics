//Make use of the arrow function
$("#contArrow")
.text(`
$("#btn").on(
    "click",
    (showAlert = () =>
    $("#result").text("Hello Assembler")
);
`);
      
$("#contClass")
.text(`
class Rectangulo {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }
    // Getter
    get area() {
        return this.calcArea();
    }
    // Método
    calcArea() {
        return this.alto * this.ancho;
    }
}
`);

$("#contTemplate")
.text(`
let a = 10;
let b = 10;

$("#btn2").on(
    "click",
    (templateString = () =>
    $("#result2")
    .text('JavaScript first appeared '$'{a + b} years ago. Wow!'))
);
`);

//Make use of the new ECMAScript 6 class structure
class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Método
  calcArea() {
    return this.alto * this.ancho;
  }
}
const cuadrado = new Rectangulo(10, 10);

$("#btnArrow").on(
    "click",
    (showContent = () =>
      $("#resultArrow").text("I'm generated by an arrow function!"))
  );

$("#btnClass").on(
    "click",
    (rectangulo = () =>
      $("#resultClass").text(cuadrado.area))
  );

//Make use of the Template Strings
let a = 10;
let b = 10;

$("#btnTemplate").on(
  "click",
  (templateString = () => 
    $("#resultTemplate")
        .text(`JavaScript first appeared ${a + b} years ago. Wow!`))
);
