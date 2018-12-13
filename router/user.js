const express = require('express')
const router = express.Router()
const UserServer=require('../servers/user')


router.post("/adduser",UserServer.addUser)
router.get("/malelist",UserServer.getMaleList)
router.get("/femalelist",UserServer.getFemaleList)
router.get("/userdetail",UserServer.getUserDetail)


module.exports = router