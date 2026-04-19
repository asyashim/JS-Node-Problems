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