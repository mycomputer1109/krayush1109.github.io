//  Node Server which will handle socket io connection
const io = require('socket.io')(8000);

const users = {};

io.on('connection', socket => {
    // If any new user join, let others users connceted to the server know !
    socket.on('new-user-joined', name => {
        console.log("New User : ", name);
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name);
    });

    //  If someone sends a message, broadcast it to the others people
    socket.on('send', message => {
        socket.broadcast.emit('receive', { message: message, name: users[socket.id] })
    });

    // If someone leaves the chat, let the others know
    socket.on('disconncet', message => {
        socket.broadcast.emit('left', users[socket.id]);
        delete users[socket.id];
    })

});




console.log("index.js is working fine");