const eventEmitter= require('events')
const events = new eventEmitter()

events.on('greet',(name)=>{
    console.log(`Hello ${name}`)
})

events.emit('greet','Asiyahashim')