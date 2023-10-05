const express = require('express')

const app = express()

app.use(express.static('clientSide'))

app.listen(3000,()=> console.log('{ APP STARTED AT PORT 3000 } self practicing node and express'))

