//Create server using HTTP module
const http= require('http');
/*const server= http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h1>Hello from HTTP Server...</h1>')
    res.end()
})*/

const server= http.createServer((req,res)=>{
    if(req.url==='/home'){
        res.write("Hello from Home page...")
    }else if(req.url==='/about'){
        res.write("Hello from About page...")
    }else{
        res.write('Page not found')
    }
    res.end()
})

server.listen(3000,()=>{
    console.log('Server is running on port 3000');
})

//Create Server using Express Framework
const express= require('express')
const app = express()

app.get('/home',(req,res)=>{
    res.send("Hello from Home page...")
})

app.get('/about',(req,res)=>{
    res.send("Hello from About page...")
})


app.get('/addition/:num1/:num2',(req,res)=>{
    let num1=Number(req.params.num1);
    let num2=Number(req.params.num2);
    let sum = num1+num2;
    res.send(sum)

})

app.get('/add/:num1',(req,res)=>{
    let num1= Number(req.params.num1)
    let num2=Number(req.query.num2)
    let result= num1+num2
    res.send(result)
})
app.listen(3322,()=>{
    console.log("Server is running on port 3322")
})