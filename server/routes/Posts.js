const express = require('express')
const router = express.Router()
const { Posts } = require('../models') //post table

//2. 라우터별 endpoint + method 설정 
router.get('/', async (req, res) => {
    const postList = await Posts.findAll()
    res.json(postList)
})
router.post('/', async (req, res) => {

    const requstBody = req.body
    //wait for the data to be inserted 
    //create is sequelize.method that is automatically created row
    await Posts.create(requstBody)
    //원래 response 따로 만들어서 보냄
    res.json(requstBody)
})

//index.js 접근(router 노출)
module.exports = router 