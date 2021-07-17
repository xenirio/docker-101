const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
const NAME = process.env.MY_NAME

app.get('/', (req, res) => res.send(`Hello, My name is: ${NAME}`))
app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`)
})
module.exports = app