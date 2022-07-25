const send = document.getElementById('send-btn')
const chat = document.getElementById('chat')
const enter = document.getElementById('entry')
const newP = document.createElement('p')

send.onclick = function() {
    newP.innerText = enter.value
    enter.value = " "
    chat.appendChild(newP)
}