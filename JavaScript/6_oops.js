// es6 class, construction function with prototype

//function object constructor function
function Person(firstname,lastname,dob)
{
    this.firstname = firstname
    this.lastname = lastname
    this.dob = new Date(dob)
    this.getBirthYear = function() {
        return  this.dob.getFullYear()
    }
    this.getFullName = function(){
        return `${this.firstname} ${this.lastname}`
    }
}

Person.prototype.getFirstName = function(){
    return `${this.firstname}`
}

// instatiate object
const person1 = new Person('Keval','Kavle','10-30-1988')

console.log(person1)
console.log(person1.dob)
console.log(person1.dob.getFullYear())
console.log(person1.getBirthYear())
console.log(person1.getFullName())
console.log(person1.getFirstName())


// ************************************************

// class

class Persons
{
    constructor(firstname,lastname,dob){
        this.firstname = firstname
        this.lastname = lastname
        this.dob = new Date(dob)
    }

    getBirthYear()
    {
        return  this.dob.getFullYear()
    }
}

person2 = new Persons('KK','KK','10-30-2020')
console.log(person2.getBirthYear())