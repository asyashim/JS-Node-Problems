const fs= require('fs');

const data= fs.readFileSync('example.txt','utf-8')
console.log(data)

fs.readFile('example.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})

fs.writeFileSync('example.txt',"hello world")
fs.writeFile('example.txt',"Hello from Node.js",(err)=>{
    if(err){
        console.log(err)        

    }else{
        console.log("File written successfully")
    }   
})

fs.appendFile('example.txt',"\nThis is an appended line.",(err)=>{
    if(err){
        console.log(err)            
    }else{
        console.log("File appended successfully")
    }       
})

/*fs.rename('example.txt','newfile.txt',(err)=>{
    if(err){
        console.log(err)            
    }else{
        console.log("File renamed successfully")
    }       
})  */