const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')


myForm.addEventListener('submit', onSubmit)

function onSubmit(e)
{
    e.preventDefault()
    
    
    if(emailInput.value == '' || nameInput.value == '')
    {
        // alert('Please Enter') never use this
        msg.classList.add('error')
        msg.innerHTML = 'Please Enter All Fields'
        setTimeout(() => msg.remove(), 3000)
    }
    else 
    {
        console.log(nameInput.value)
        console.log(emailInput.value)


        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))
        userList.appendChild(li)

        // clear the fields
        nameInput.value = ''
        emailInput.value = ''

    }

} 