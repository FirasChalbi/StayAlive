const express = require('express')
const app = express()

app.listen(4000,() => {
    console.log('salam la famille a port 3000')
})
app.get("/", (req, res) => {
    res.json({message: "Hello"})
  });