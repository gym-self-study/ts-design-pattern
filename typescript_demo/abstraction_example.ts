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

// example of here we are using the Shape interface to calculate the area and perimeter of different shapes.
// we are not sure about the implementation of the Circle, Square, and Retangle classes, but we know that they will return the area and perimeter of the shapes.
function calculateArea(shape: Shape) {
    return shape.getArea();
}

// example of here we are using the Shape interface to calculate the area and perimeter of different shapes.
// we are not sure about the implementation of the Circle, Square, and Retangle classes, but we know that they will return the area and perimeter of the shapes.
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
// example of here we are using the Date class to get the current date, month, and year.
// we are not sure about the implementation of the Date class, but we know that it will return the current date, month, and year.
const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
console.log(`Date: ${month}/${day}/${year}`); // Date: 9/15/2021