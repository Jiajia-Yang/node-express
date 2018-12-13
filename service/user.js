/**
 * created by jiajia-yang
 */

const UserService = require('../services/user.js');


let result_user={
    result: "ok",
    msg: "",
    desc: "",
    userInfo: {}
}

let result_server={
    encode: 0,
    msg: "",
    desc: "",
    userInfo: {}
}

const isAvailableData = data => {
  if(data instanceof Object){
      console.log("14:",data);
      return {encode:0,data:data};

  }else{
      try{
          console.log("30:",data);
          console.log("31:",typeof data);
          data=JSON.parse(data);
          console.log("18:",data);
          return {encode:0,data:data};
      }catch (err){
          console.log("23:",err);
          return {encode:-1,data:data}
      }
  }
}

exports.addUser = (req, res) => {
  const clientUser = req.body
  const userInfo = isAvailableData(clientUser).data
  UserService.addUser(userInfo, result => {
    res.send(result_user)
  })
}

exports.getFemaleList = (req, res) => {
  const clientUser = req.body
  const userInfo = isAvailableData(clientUser).data
  UserService.getFemaleList(userInfo, result => {
    res.send(result_user)
  })
}

exports.getMaleList = (req, res) => {
  const clientUser = req.body
  const userInfo = isAvailableData(clientUser).data
  UserService.getMaleList(userInfo, result => {
    res.send(result_user)
  })
}

exports.getUserDetail = (req, res) => {
  const clientUser = req.body
  const userInfo = isAvailableData(clientUser).data
  UserService.getUserDetail(userInfo, result => {
    res.send(result_user)
  })
}








