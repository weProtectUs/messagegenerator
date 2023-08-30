const nameSelector = () => {
    const name = document.getElementById('name').value
    if (name.length > 1) {
        return name
    } else {
        console.log('Error Message')
    }
}

import {beginPhrase} from './messages'
import {endPhrase} from './messages'

const messageGenerator = () => {
    const randBeginIndex = Math.floor(Math.random() * 5)
    const randEndIndex = Math.floor(Math.random() * 5)

    return `Greetings ${nameSelector()} ${beginPhrase[randBeginIndex]} ${endPhrase[randEndIndex]}`
  
}


const outPutMessage = () => {
    if (typeof nameSelector() === 'string') {
        document.getElementById('output').innerHTML = messageGenerator()
        document.getElementById('name').value = " "
    } else {
        console.log('Error Message')
    }
   
} 

const input = document.getElementById('name')

input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault()

        document.getElementById('submit').click()
    }
})

