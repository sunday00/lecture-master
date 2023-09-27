const ws = new WebSocket('ws://localhost:7071/ws')

ws.onmessage = (msg) => {
    console.log(msg)
}

document.body.addEventListener('mousemove', (e) => {
    ws.send(JSON.stringify({x: e.clientX, y: e.clientY}))
})