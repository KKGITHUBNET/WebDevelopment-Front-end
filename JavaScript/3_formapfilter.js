    const todos= [
        {
            id :1,
            text : 'get a job',
            willyou : true
        },
        {
            id :2,
            text : 'get a tuition',
            willyou : true
        },
        {
            id :3,
            text : 'get a flat stomach',
            willyou : true
        },
        {
            id :4,
            text : 'do timepass',
            willyou : false
        }
    ]

console.log(todos[0].text)

const todoJSON = JSON.stringify(todos)
console.log(todoJSON)
console.log(todos.length)
/*
for (let todo of todos)
{
console.log(todo.text)
}

/*

// for loop

for(let i=0; i < 3 ;i++) 
{
    console.log("for loop " + i)
}


// while
let j =0
while(j<3)
{
    console.log("while loop " + j)
    j++
}

*/

//foreach,map,filter
todos.forEach(function(todo)
{
    console.log(todo.text)
})


// map
const todoid = todos.map(function(todo){
    return todo.id
})
console.log(todoid)

//filter
const todoids = todos.filter(function(todo){
    return todo.id <= 2
}).map(function(todo) {
    return todo.text
})
console.log(todoids)




