var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    Circle.prototype.getPerimeter = function () {
        return 2 * Math.PI * this.radius;
    };
    Circle.prototype.print = function () {
        console.log('Circle');
    };
    return Circle;
}());
var Square = /** @class */ (function () {
    function Square(side) {
        this.side = side;
    }
    Square.prototype.getArea = function () {
        return Math.pow(this.side, 2);
    };
    Square.prototype.getPerimeter = function () {
        return 4 * this.side;
    };
    return Square;
}());
var Retangle = /** @class */ (function () {
    function Retangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Retangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    Retangle.prototype.getPerimeter = function () {
        return 2 * (this.width + this.height);
    };
    return Retangle;
}());
function printShape(shape) {
    var _a;
    (_a = shape.print) === null || _a === void 0 ? void 0 : _a.call(shape);
}
function calculateArea(shape) {
    return shape.getArea();
}
function calculatePerimeter(shape) {
    return shape.getPerimeter();
}
var circle = new Circle(5);
var square = new Square(5);
var retangle = new Retangle(5, 10);
printShape(circle);
printShape(square);
printShape(retangle);
console.log("Circle Area: " + calculateArea(circle));
console.log("Square Area:" + calculateArea(square));
console.log("Retangle Area:" + calculateArea(retangle));
console.log("Circle Perimeter:" + calculatePerimeter(circle));
console.log("Square Perimeter:" + calculatePerimeter(square));
console.log("Retangle Perimeter:" + calculatePerimeter(retangle));
// Date
var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
console.log("Date: ".concat(month, "/").concat(day, "/").concat(year)); // Date: 9/15/2021
