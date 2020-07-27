// alert('Hello World')

console.log('Hello World');
// console.error('This is explicit error'); execution will not happen after this line of error
console.warn('This is warning');


// variables : var, let, const
// var is globally scoped. it can cause conflict so it is not advised. es(etimoscript)
// let : reassignment is possible

let a = 30;
a=31
console.log(a);

/* datatypes
primitive data types :
String, Numbers, Boolean, null,  undefined
*/

const name = 'John'
const age = 31
const rating = 3.5
const isCool = true
const x = null
const y = undefined

console.log(typeof name)

// concatenation
console.log('My name is ' + name + ' and my age is ' + age + '.')
// template string
const hello = `my name is ${name} and age is ${age}`
console.log(hello)

const s = 'Hello World'
console.log(s.length)
console.log(s.toUpperCase())
console.log(s.substring(0,5).toUpperCase())
arr=s.split(' ')
console.log(s.split(' '))
console.log(typeof arr)





// Arrays

const fruits = new Array('strawberry','chickoo','guava','pineapple')
fruits[4] = 'mango'
// numbers.unshift(8)

console.log(fruits)
console.log(fruits[1])
fruits.push('apple')
console.log(fruits)
fruits.pop() // last one off
console.log(fruits)

console.log(Array.isArray(fruits))
console.log(fruits.indexOf('mango'))

console.log(Array.isArray('fruits')) */
































