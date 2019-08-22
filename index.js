console.log('hello')
document.querySelector('button').addEventListener('click', addBill)


function addBill(event) {
    // event.preventDefault()
    
    const item = document.createElement('li')
    const input = document.querySelector('.name')
    item.innerText = input.values
    const list = document.querySelector('.thelist')
    list.appendChild(item)
    
    console.log('working')
}


    // const button = document.createElement('button')
    // button.innerText = 'X'
    // button.addEventListener('click', removeTodo)
    // item.append(button)
    // const list = document.querySelector('ul')
    // list.appendChild(item