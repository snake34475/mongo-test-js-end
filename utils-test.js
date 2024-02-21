//连接数据库需要先进行连接
let MongoClient=require("mongodb").MongoClient

//设置路径
//组成   mongodb://localhost:端口号/数据库名称
const url="mongodb://localhost:27017/runoob"

MongoClient.connect(url,function(err,db){
    if(err) throw err
    console.log("数据库已创建");
    const dbase=db.db("runoob")

    //创建集合
    // dbase.createCollection("wh",function(err,res){
    //     if(err) throw err
    //     console.log("创建了集合")
    //     db.close()
    // })
    
    //插入单条数据
    // var myObj={
    //     // name:"王腾瑶",
    //     // job:"键盘侠",
    //     // hp:1000,
    //     // mp:500,
    //     // atk:100,
    //     // dt:50,
    //     // message:"风萧萧兮易水寒,壮士一去兮不复还"
    // };
    // dbase.collection("wh").insertOne(myObj,function(err,res){
    //     if(err) throw err
    //     console.log("文档插入成功");
    //     db.close()
    // })

    //插入多条数据
    // var myobj =  [
    //     { name: '菜鸟工具', url: 'https://c.runoob.com', type: 'cn'},
    //     { name: 'Google', url: 'https://www.google.com', type: 'en'},
    //     { name: 'Facebook', url: 'https://www.google.com', type: 'en'}
    //    ];
    // dbase.collection("wh").insertMany(myobj,function(err,res){
    //     if(err) throw err;
    //     console.log("插入的文档数量为:"+res.insertedCount)
    //     db.close()
    // })


    //搜索数据
    // const whereStr={
    //     name:"王腾瑶"
    // }
    //查找谁,找到后调用转化arry的方法
    // dbase.collection("wh").find(whereStr).toArray(function (err,res){
    //     if(err)  throw err
    //     console.log("result",res)
    //     db.close()
    // })

    //更新数据

    //更新单单条数据
//    const whereStr={
//         name:"王腾瑶"
//     }
//     //更新的时候一定要记得写$set
//     let updatastr={$set:{
//         dt:100
//     }
//     }
//     dbase.collection("wh").updateOne(whereStr,updatastr,function(err,res){
//         if(err) throw err
//         console.log("文档更新成功")
//         db.close()
//     })

//多条数据就用updateMany()
})