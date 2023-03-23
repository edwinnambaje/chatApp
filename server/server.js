const express=require('express');
const path=require('path');
const dotenv=require('dotenv');
const http=require('http')
const publicPath=path.join(__dirname,'./../public');
const socketIO=require('socket.io');

const app=express();
let server=http.createServer(app)
let io=socketIO(server)
io.on("connection",(socket)=>{
    console.log("A new user just connected")
    socket.on('disconnect', ()=>{
        console.log("User Disconnected from server");
    })
})
const port=process.env.PORT || 3000;
dotenv.config()
app.use(express.static(publicPath));
server.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
})