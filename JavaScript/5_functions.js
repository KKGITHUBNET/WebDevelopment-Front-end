function addNums(num1 = 0, num2= 0)
{
    return num1 + num2
}

console.log(addNums(4,5))
addNums()


// Arrow Function
const addNum_arrow = (num1 = 0, num2= 0) => 
{
    return num1 + num2
}

console.log(addNum_arrow(5,5))


const addNum_arr = (num1 = 0, num2= 0) => num1 + num2

console.log(addNum_arr(2,3))


const addNum_arr_short = num1 => num1
console.log(addNum_arr_short(4))



