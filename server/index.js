const express = require('express')
const app = express()
const db = require('./models')
const cors = require('cors')

app.use(express.json())
app.use(cors())

//Routers
const postRouter = require('./routes/Posts')
app.use('/posts', postRouter) //1. 라우터마다의 절대경로 설정

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('Server Running On Port 3001~~')
    })
})
