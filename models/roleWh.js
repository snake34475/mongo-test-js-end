//基于监听,和数据库连接的基础之上进行的操作
var mongoose = require("./db")

var mongoSchema = mongoose.Schema;// 当前数据库的相应集合对象

//设计用户表的集合
var ArticleSchema = mongoose.Schema({
    name:{type:String},
    sex:{type:String},
    job:{type:String},
    hp:{type:Number},
    mp:{type:Number},
    atk:{type:Number},
    dt:{type:Number},
    message:{type:String},
    isVip:{type:Boolean},
})

//导出,
//第一个参数是集合model name,第三个参数是collection name
//如果不传第三个参数,会默认生成一个model name加s的集合,里算是
module.exports = mongoose.model("wh", ArticleSchema,"wh");