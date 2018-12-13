/**
 *  created by jiajia-yang
 */
const mysql=require('mysql');

const _Date=require("../utils/Date");

const connPool=mysql.createPool({
    host: "127.0.0.1" ,
    port: 3306,
    database: "accountmysql",
    user: "root",
    password: "03251222yxn"
})

const mysqlExce = (sql,callback) => {
  connPool.getConnection((err, conn) => {
    if (err) {
      console.log("连接数据库失败", err)
      return
    } else {
      console.log("连接数据库成功")
      conn.query(sql, (sql_err,sql_result,fields_desic) => {
        if (sql_err) {
          if (callback) {
            callback(sql_err, null, null)
            conn.release();
          }
          return;
        }
        if (callback) {
          callback(null, sql_result, fields_desic)
          conn.release()
        }
      })
    }
  })
}

//----------------------------------------------------------------获取女用户列表----------------------------------------------------------------
exports.getFemaleList = (userInfo, callback) => {
  const sql=`select * from user where sex=0`
  mysqlExce(sql, (err, sql_result, fields_desic) => {
    err ? callback(err, null) : callback(null, sql_result)
  })
}

//----------------------------------------------------------------获取男用户列表----------------------------------------------------------------
exports.getMaleList = (userInfo, callback) => {
  const sql=`select * from user where sex=1`
  mysqlExce(sql, (err, sql_result, fields_desic) => {
    err ? callback(err, null) : callback(null, sql_result)
  })
}

//----------------------------------------------------------------获取用户详情----------------------------------------------------------------
exports.getUserDetail = (userInfo, callback) => {
  const sql=`select * from user where id=${id}`
  mysqlExce(sql, (err, sql_result, fields_desic) => {
    err ? callback(err, null) : callback(null, sql_result)
  })
}

//----------------------------------------------------------------添加新用户----------------------------------------------------------------
exports.addUser = (userInfo, callback) => {
  const {name,qq,cardId} = userInfo
  const sql = `insert into user(name,qq,cardId)\values("${name}","${qq}","${cardId}")`
  mysqlExce(sql, (err,sql_result,fields_desic) => {
    err ? callback(err, null) : callback(null, sql_result)
  });
}

