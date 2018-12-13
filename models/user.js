const UserMysql = require('../db/user');
const UserResult = {
    "state": 0,
    "userInfo":{}
}

class User {
  constructor (user) {
    this.name=user.name
    this.qq=user.qq
  }


  //----------------------------------------------------------------添加新用户----------------------------------------------------------------
  addUser (userInfo,callback) {
    UserMysql.addUser(userInfo, function (err,return_result) {
      if(err){
        UserResult.state = -1
        UserResult.desc = "添加用户失败"
        callback(UserResult)
      }else{
        UserResult.state = 0
        UserResult.desc = "添加用户成功"
        callback(UserResult)
      }
    })
  }
  

  //----------------------------------------------------------------获取女用户列表----------------------------------------------------------------
  getFemaleList (userInfo,callback) {
    UserMysql.getFemaleList(userInfo, function (err,return_result) {
      if(err){
        UserResult.state = -1
        UserResult.desc = "添加用户失败"
        callback(UserResult)
      }else{
        UserResult.state = 0
        UserResult.desc = "添加用户成功"
        callback(UserResult)
      }
    })
  }

  
  //----------------------------------------------------------------获取男用户列表----------------------------------------------------------------
  getMaleList (userInfo,callback) {
    UserMysql.getMaleList(userInfo, function (err,return_result) {
      if(err){
        UserResult.state = -1
        UserResult.desc = "添加用户失败"
        callback(UserResult)
      }else{
        UserResult.state = 0
        UserResult.desc = "添加用户成功"
        callback(UserResult)
      }
    })
  }


  //----------------------------------------------------------------获取用户详情----------------------------------------------------------------
  getUserDetail (userInfo,callback) {
    UserMysql.getUserDetail(userInfo, function (err,return_result) {
      if(err){
        UserResult.state = -1
        UserResult.desc = "添加用户失败"
        callback(UserResult)
      }else{
        UserResult.state = 0
        UserResult.desc = "添加用户成功"
        callback(UserResult)
      }
    })
  }

}

