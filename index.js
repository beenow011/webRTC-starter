const fs = require('fs');
const https = require('https')
const express = require('express');
const app = express();
const socketio = require('socket.io');
app.use(express.static(__dirname))


const key = fs.readFileSync('cert.key')
const cert = fs.readFileSync('cert.crt')


const es = https.createServer({ key, cert }, app);
const io = socketio(es, {
    cors: {
        origin: [
            'https://localhost'
        ],
        methods: ["GET", "POST"]
    }
})

es.listen(8182, () => {
    console.log("app listening")
})

