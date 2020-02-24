const websocket=require('ws')
const ws=new websocket.Server({port:9999},()=>{
  console.log('socket start')
})

ws.on('connection',client=>{
  client.send('欢迎光临')
  client.on('message',msg=>{
    console.log('来自前端的数据'+msg)
  })
  client.on('close',msg=>{
    console.log('前端断开链接')
  })
})