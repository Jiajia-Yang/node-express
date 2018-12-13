const UserDao=require('../models/UserDao')

let result={
    "state":0,
    "userInfo":"",
    "desc":""
}

let publicUserDao=new UserDao({
    name:"",
    qq:"",
    sex: ""
 })

exports.addUser = (userInfo,callback) => {
  publicUserDao.addUser(userInfo, user_result => {
    if (user_result.state === -1) {
      result.state = -1;
      result.desc = "添加失败"
      callback(result)
    } else {
      result.state = 0
      result.desc = "添加成功"
      callback(result)
    }
  })
}

exports.getFemaleList = (userInfo,callback) => {
  publicUserDao.getFemaleList(userInfo, user_result => {
    if (user_result.state === -1) {
      result.state = -1;
      result.desc = "添加失败"
      callback(result)
    } else {
      result.state = 0
      result.desc = "添加成功"
      callback(result)
    }
  })
}

exports.getMaleList = (userInfo,callback) => {
  publicUserDao.getMaleList(userInfo, user_result => {
    if (user_result.state === -1) {
      result.state = -1;
      result.desc = "添加失败"
      callback(result)
    } else {
      result.state = 0
      result.desc = "添加成功"
      callback(result)
    }
  })
}

exports.getUserDetail = (userInfo,callback) => {
  publicUserDao.getUserDetail(userInfo, user_result => {
    if (user_result.state === -1) {
      result.state = -1;
      result.desc = "添加失败"
      callback(result)
    } else {
      result.state = 0
      result.desc = "添加成功"
      callback(result)
    }
  })
}