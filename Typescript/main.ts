export {}
let message = 'Welcome Back';
console.log(message);

let x  = 10
x = 20

const y = 10
// y =14 This is not allowed
// const z This is not allowed. 

// Basic Data Types
let isBeginner: boolean = true
let total: number = 10
let name: string = 'Keval'

// Template String
let sentense: string = 
`My name is ${name}
I am a beginner in Typescript`

console.log(sentense)

// null and undefined
let n: null = null
let u: undefined = undefined


// Array type : any syntax is good
let list1: number[] = [1,2,3]
let list2: Array<number> = [1,2,3]

// Array with mixed type. number + string. Static. You can not change the order or number of elemenets in tuples.
let person1 :[string,number] = ['Keval',32]


// enum type: set
enum Color {Red,Green,Blue}   // red is 0, green is 1 and blue is 2
let c: Color = Color.Blue

console.log(c)

enum Col {Red = 10,Green,Blue}   // red =10, green = 11, blue =12
let d: Col = Col.Blue

console.log(d)

// any type. We can reassign the variable type/value using "any"
let rand: any =10
rand = true
rand='KK'

let myVar : any = 10
console.log(myVar)
console.log(myVar.name)
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
let anyType : any
anyType = 10
anyType = true


// union type - this has restriction to only declared datatype. Intellisense support
let multiType : boolean | number
multiType = 20
multiType = true



// type script functions. 
// (we can also write function using java script notations i.e
// without denoting datatype and return data type
// ? - optional parameter. Optional parameter has to be last parameter/s

function add(num1 : number,num2?: number): number {
    if (num2){
    return num1+num2
    }
    else { return num1 }
}

let sum = add(5,10)
console.log(sum)
sum = add(5)
console.log(sum)


// default parameter
function multiply(num1 : number,num2: number = 10): number {
      return num1 * num2
  }

let mul = multiply(5,5)
console.log(mul)
mul = multiply(5)
console.log(mul)


function fullname(person : {firstname: string, lastname: string})
{
    console.log(`${person.firstname} ${person.lastname}`)
}


let p = {firstname : 'Keval', lastname:'Kavle'}
fullname(p)


// Interface
// can specify optional and default parameters in interface
// useful in forms. when not all properties are mandatory
interface Person{
    firstname:string
    lastname?: string
}

function fullName(person : Person){
    console.log("interface :")
    console.log(`${person.firstname} ${person.lastname}`)
}

let p1 = {firstname : 'Keval', lastname:'Kavle'}
fullName(p1)
let p2 = {firstname : 'Keval'}
fullName(p2)


// Class

class Employee {
    employeeName : string  // this is public attribute
    private dummy : number // can only be access within class
    protected dummyProc : number =100 // can be access within class and derived class

    constructor(name: string){
        this.employeeName = name
    }

    greet(){
        console.log(`Good Morning ${this.employeeName}`)
    }
}

let e = new Employee('Keval')
e.greet()

// class based inheritence
console.log("******************Interfaces**********************")
class Manager extends Employee{
    
    post : string
    constructor(managerName: string, post: string){
        
        super(managerName)
        this.post = post
    }

    delegeteWork(){
        console.log(`${this.employeeName} is awesome. ${this.dummyProc}%`)
    } 
}

let m1 = new Manager('Keval Kavle','Senior Manager')
console.log(m1)
m1.greet()
m1.delegeteWork()
// m1.dummy is not available as dummy is private    this only can be accessed within Employee class
