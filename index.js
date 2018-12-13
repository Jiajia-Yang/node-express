/**
 * created by jiajia-yang
 */

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const http = require('http')
const { isArray } = Array
const port = 1234

var user = require('./router/user.js')



app.use(bodyParser.json({limit:"2mb"}))
app.use(bodyParser.urlencoded({
   extended: true
}))

app.use("/public", express.static(__dirname+"/public"))

app.all("*", (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')
  res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS")
  res.setHeader("X-Powered-By",' 3.2.1')
  res.setHeader("Content-Type", "application/json;charset=utf-8")
  next()
})


app.use("/user", user)

app.listen(8000,"0.0.0.0", function () {
  console.log("开启账户服务器监听");
  //console.log(app.locals)
})





