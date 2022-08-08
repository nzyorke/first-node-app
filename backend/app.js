const express = require("express");
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors())

const data = [
    {
        name: "carrot",
        colour: "orange"
    },
    {
        name: "Broccoli",
        colour: "green"
    }
]

const dinosaurs  = [
    {
        name: "Tyrannosaurus",
        height: "3.7 – 6.1 m",
        lifespan: "30 years"

    },
    {
        name: "Triceratops",
        height: "2.9 – 3 m",
        lifespan: "28 years"

    },
    {
        name: "Brachiosaurus",
        height: "9.4 m",
        lifespan: "100 years"

    },
]

// set up a route
// set it up for the root which is a slash
app.get('/', (req, res) => {
    console.log("hello");
    res.send(`
    <h1>Hello World</h1>
    <a href="/vegetables">view vegetables</a>
    <a href="/vegetables">view dinosaurs</a>
    `)
})

// set up the route for the about page
app.get('/vegetables', (req, res) => {
    res.send(data)
})

// set up the route for the about page
app.get('/dinosaurs', (req, res) => {
    res.send(dinosaurs)
})

// Get the route for /contact and show an h1 saying wellcome to contact page
app.get('/contact', (req, res) => {
    res.send('<h1>Contact</h1>')
})  

app.listen(port, () => {
  console.log(`Our app is running on port${port}`);
});

console.log("This is my second commit");
