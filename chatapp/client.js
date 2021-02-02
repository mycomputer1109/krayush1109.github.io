

console.log('Client is working properly');

const socket = io('http://localhost:8000');

// ..... GET DOM ELEMENT IN RESPECTIVE JS VARIABLES
const form = document.getElementById('send-container');  // .. Connecting Id of form made in index.js to this file 

const messageInput = document.getElementById('messageInp'); // receiveing text message of textarea

const messageConatiner = document.querySelector('.container');  // any message received will be received here

// AUDIO THAT WILL PLAY ON RECEIVING MESSAGE
var audio = new Audio('img and sound/ting.mp3');

// FUNCTION WHICH WILL APPEND EVENT INFO TO THE CONTAINER
const append = (message, position) => {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);

    if(position == 'left'){
        audio.play();
    }
}


// .... ASK NEW USER FOR HIS/HER NAME AND LET THE SERVER KNOW
const name = prompt("Enter You Name to Join the Chat Group");

// It will emit an event and this will listened by nodeIndex.js
socket.emit('new-user-joined', name); 

// IF A NEW USER JOINS, RECEIVE HIS/HER NAME FROM THE SERVER
socket.on('user-joined', name => {
    append(`${name} joined the Chat`, 'right');
});

// IF SERVER SENDS A MESSAGE, RECEIVE IT
socket.on('receive', data =>{
    append(`${data.name}: ${data.message}`, 'left');
});

// IF A USER LEAVES THE CHAT, APPEND THE INFO TO THE CONTAINER
socket.on('left', name => {
    append(`${name} left the Chat`, 'left');
})

// IF THE FORM GET SUBMITTED, SEND SERVER THE MESSAGE
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const message = messageInput.Value;
    append(`You : ${message}`, 'right');
    socket.emit('send', message);
    messageInput.value = "";
})