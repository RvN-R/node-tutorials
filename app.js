 const http = require('http')

//  const server = http.createServer((req, res) => {
//     res.end('Welcome')
//  })
 
 // Using Event Emitter API
 const server = http.createServer()
 // emits request event
 // subscribe to it / listen to it / respond to it
 server.on('request', (req , res) => {
     res.end('Wecolcome')
 })

 server.listen(5000)

 
 const EventEmitter = require('events');

 const customEmitter = new EventEmitter()

 customEmitter.on('response', (name,id) => {
     console.log(`data recieved ${name} with id ${id}`)
 })

 customEmitter.on('response', () => {
    console.log(`some other logic here`)
})

 customEmitter.emit('response', 'john', 34)