const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log("Hello world");
res.send('<h1>Hello world</h1>')
})

app.listen(port, () => {
    console.log(`Our app is running on port${port}`)
})