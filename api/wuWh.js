const { response } = require('express');
let Notices = require('../models/wuWh');
//查找
const find=(req, res, next)=>{
    const {value,key}=req.query
    let obj={}
    if(value){
        obj[key||"name"]=value
    }
    res.setHeader("Cache-Control","no-cache"); 
    Notices.find(obj, function (err, doc) {
        if (err) {
            res.json({
                msg: err.message,
                code:2
            });
        } else {
            res.json({
                count: doc.length,
                list: doc,
                code:1
            })
            return doc
        }
    });
}
//添加
const save=(req, res, next)=>{
    const {query}=req
    let entity = new Notices(query);
    entity.save((err, result) => {
        if (err) {
            res.json({
                msg: err.message,
                code:2
            });
                } else {
            res.json({
                msg: "添加成功",
                code:1
            })
        }
    });
}
//更新
const updata=(req, res, next)=>{
    let {whereStr,updataStr}=req.query
    //解析
    updataStr=JSON.parse(updataStr)
    whereStr=JSON.parse(whereStr)

    updataStr={$set:{...updataStr}}

     Notices.updateOne({name:whereStr.name},updataStr,(error, result) => {
            if (error) {
                if (err) throw err;
                res.json({
                    code:2,
                    msg: error.message
                });
            } else {
                res.json({
                    code:1,
                    msg: "成功",
                })
            }
        });
    }
//删除
const deleteOne=(req, res, next)=>{
    Notices.remove(req.query,(error, result) => {
        if (error) {
            res.json({
                code:1,
                msg: err.message
            });
        } else {
            res.json({
                code:2,
                msg: '成功',
            })
        }
    });
}
module.exports={
    find,
    save,
    updata,
    deleteOne
}