"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'Welcome Back';
console.log(message);
var x = 10;
x = 20;
var y = 10;
// y =14 This is not allowed
// const z This is not allowed. 
// Basic Data Types
var isBeginner = true;
var total = 10;
var name = 'Keval';
// Template String
var sentense = "My name is " + name + "\nI am a beginner in Typescript";
console.log(sentense);
// null and undefined
var n = null;
var u = undefined;
// Array type : any syntax is good
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// Array with mixed type. number + string. Static. You can not change the order or number of elemenets in tuples.
var person1 = ['Keval', 32];
// enum type: set
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {})); // red is 0, green is 1 and blue is 2
var c = Color.Blue;
console.log(c);
var Col;
(function (Col) {
    Col[Col["Red"] = 10] = "Red";
    Col[Col["Green"] = 11] = "Green";
    Col[Col["Blue"] = 12] = "Blue";
})(Col || (Col = {})); // red =10, green = 11, blue =12
var d = Col.Blue;
console.log(d);
// any type. We can reassign the variable type/value using "any"
var rand = 10;
rand = true;
rand = 'KK';
var myVar = 10;
console.log(myVar);
console.log(myVar.name);
// myVar(); 
// myVar.toUpperCase()
/* I guess, This is not possible in latest version of typescript
let myUnVar: unknown = 'ds'
//console.log(myUnVar.name)
(myUnVar as string).toUpperCase()

*/
/* a tutorial showed that this is possible. confused...
let t
let t= 10
let t = true
*/
// any data type. No Intellisense support
var anyType;
anyType = 10;
anyType = true;
// union type - this has restriction to only declared datatype. Intellisense support
var multiType;
multiType = 20;
multiType = true;
// type script functions. 
// (we can also write function using java script notations i.e
// without denoting datatype and return data type
// ? - optional parameter. Optional parameter has to be last parameter/s
function add(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
var sum = add(5, 10);
console.log(sum);
sum = add(5);
console.log(sum);
// default parameter
function multiply(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 * num2;
}
var mul = multiply(5, 5);
console.log(mul);
mul = multiply(5);
console.log(mul);
function fullname(person) {
    console.log(person.firstname + " " + person.lastname);
}
var p = { firstname: 'Keval', lastname: 'Kavle' };
fullname(p);
function fullName(person) {
    console.log("interface :");
    console.log(person.firstname + " " + person.lastname);
}
var p1 = { firstname: 'Keval', lastname: 'Kavle' };
fullName(p1);
var p2 = { firstname: 'Keval' };
fullName(p2);
// Class
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.dummyProc = 100; // can be access within class and derived class
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
var e = new Employee('Keval');
e.greet();
// class based inheritence
console.log("******************Interfaces**********************");
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName, post) {
        var _this = _super.call(this, managerName) || this;
        _this.post = post;
        return _this;
    }
    Manager.prototype.delegeteWork = function () {
        console.log(this.employeeName + " is awesome. " + this.dummyProc + "%");
    };
    return Manager;
}(Employee));
var m1 = new Manager('Keval Kavle', 'Senior Manager');
console.log(m1);
m1.greet();
m1.delegeteWork();
// m1.dummy is not available as dummy is private    this only can be accessed within Employee class
