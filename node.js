const eventEmitter= require('events')
const fs = require('fs')
const events = new eventEmitter()

events.on('greet',(name)=>{
    console.log(`Hello ${name}`)
})

events.emit('greet','Asiyahashim')

async function getData(){
  try{

    const data = await fs.readFileSync('example.txt','utf8')

    console.log(data)
}catch(err){
    console.log(err)
}
}
getData()

