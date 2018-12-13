/**
 * Created by jiajia-yang on 2018/10/22.
 */

const year=(new Date().getFullYear()).toString();
const month=(new Date().getMonth()+1).toString();
const date=(new Date().getDate()).toString();
class _Date {
  constructor(){
  }
  _getDate(){
      if(month.length === 1){
          month = "0" + month;
      }
      if(date.length===1){
          date = "0" + date;
      }
      console.log("year:", year, "\nmonth:", month);
      return year + month + date;
  }
}

module.exports = _Date;