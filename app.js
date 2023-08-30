const nameSelector = () => {
    const name = document.getElementById('name').value
    if (name.length > 1) {
        return name
    } else {
        console.log('Error Message')
    }
}

const beginPhrase = ['you are a very focused and determined person', 'you have a fiery and spontaneous personality', 'you are a sincere guenuine person', 'you will learn from your past transgressions',  'you will overcome your dark days']
const endPhrase = ['and that will pay dividends in the near future.', 'you provide a spark for those around you.', 'the people in your life appreciate that about you.', 'and that will be the foundation of future success.', 'but youre still a loser.']


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

