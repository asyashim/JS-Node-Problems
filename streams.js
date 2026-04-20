const fs= require('fs')
//readStream
const readStream =fs.createReadStream('example.txt')

readStream.on('dara',(chunk)=>{
    console.log(chunk)
})

//writeStream

const writeStream= fs.writeStream('example.txt')
writeStream.write("Hello")
writeStream.write("Good morning")
writeStream.end()

//Pipe
readStream.pipe(writeStream)