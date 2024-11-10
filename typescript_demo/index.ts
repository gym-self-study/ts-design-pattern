interface Shape {
    getArea(): number;
    getPerimeter(): number;

    // Optional method
    print?(): void;
}

class Circle implements Shape {

    constructor(private radius: number) {}

    getArea(): number {
        return Math.PI * this.radius ** 2;
    }
    getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
    print?(): void {
        console.log('Circle');
    }
    
}

class Square implements Shape {

    constructor(private side: number) {}

    getArea(): number {
        return this.side ** 2;
    }
    getPerimeter(): number {
        return 4 * this.side;
    }
    
}

class Retangle implements Shape {

    constructor(private width: number, private height: number) {}

    getArea(): number {
        return this.width * this.height;
    }
    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }
    
}

function printShape(shape: Shape) {
    shape.print?.();
}

function calculateArea(shape: Shape) {
    return shape.getArea();
}

function calculatePerimeter(shape: Shape) {
    return shape.getPerimeter();
}


const circle = new Circle(5);
const square = new Square(5);
const retangle = new Retangle(5, 10);

printShape(circle);
printShape(square);
printShape(retangle);

console.log("Circle Area: " + calculateArea(circle));
console.log("Square Area:"  + calculateArea(square));
console.log( "Retangle Area:" + calculateArea(retangle));

console.log("Circle Perimeter:" + calculatePerimeter(circle));
console.log("Square Perimeter:" + calculatePerimeter(square));
console.log( "Retangle Perimeter:" + calculatePerimeter(retangle));


// Date
const date = new Date();


const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

console.log(`Date: ${month}/${day}/${year}`); // Date: 9/15/2021