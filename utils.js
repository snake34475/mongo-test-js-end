
//首先,我要操作数据库,那么第一步一定是先建立和数据库的链接
//引入连接的类
var MongoClient = require('mongodb').MongoClient
//本地数据库的url
var url="mongodb://localhost:27017/runoob"

//链接服务器
//使用连接的方法,填入基础路径
MongoClient.connect(url,function(err,db){
    //捕获错误
    if(err) throw err
    console.log("数据库已创建");
    //连接之后,引入db的db方法
    var dbase=db.db("runoob")
    //给他创建集合
    dbase.createCollection("wh",function(err,res){
        if(err) throw err
        console.log("创建集合")
        db.close();
    })
})