// polymorphism in javascript

class Shape {
    constructor() {
        this.type = "Shape";
    }

    draw() {
        console.log("Drawing a generic shape.")
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.type = "Circle";
        this.radius = radius;
    }

    draw() {
        console.log(`Drawing a circle with radius ${this.radius}`);
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super();
        this.type = "Square";
        this.sideLength = sideLength;
    }

    draw() {
        console.log(`Drawing a square with the side length ${this.sideLength}`)
    }
}

function drawShape(shape) {
    shape.draw();
}

// instance of object
const myCircle = new Circle(5);
const mySquare = new Square(4);

drawShape(myCircle);
drawShape(mySquare);
drawShape(new Shape());