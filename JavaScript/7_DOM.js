// console.log(window)   window object is parent object of the browser

// DOM - Document Object Model

// single element
const form = document.getElementById('my-form')
console.log(form)
console.log(document.querySelector('.container'))


// multiple element
console.log(document.querySelectorAll('.item'))  // this gives node list
console.log(document.getElementsByClassName('item')) // this gives html collection. manually has to be converted to array to use array function
console.log(document.getElementsByTagName('li')) // html list

const items = document.querySelectorAll('.item')

items.forEach((item) => console.log(item))


const ul = document.querySelector('.items')

// ul.remove() this removes the lists

// ul.lastElementChild.remove()
ul.firstElementChild.textContent = 'Hello from js'
ul.children[1].textContent = 'Hello 2'
ul.lastElementChild.innerHTML = '<h3> Hello 3</h2>'  // adding html dynamically




const btn = document.querySelector('.btn')

btn.addEventListener('click', (e) => {    // mouseover, mouseout and other input events
    e.preventDefault()
    console.log('click')
    console.log(e)
    console.log(e.target)
    console.log(e.target.className)
    document.querySelector('#my-form').style.background = '#ccc'

    //document.querySelector('body').classList.add('bg-dark')

    document.querySelector('.items').lastElementChild.innerHTML = '<h2>hahah</h2>'
})


