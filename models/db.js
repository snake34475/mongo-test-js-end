//1, 引入mongoose
var mongoose = require("mongoose")
//2，连接MongoDB数据库
//数据库的路径
mongoose.connect('mongodb://127.0.0.1:27017/runoob', { useNewUrlParser: true });
//useNewUrlParser防止url解析废弃
// mongoose.connect('mongodb://root:123456@127.0.0.1:27017/park');


//3.监听连接的状态,作出不同操作

//连接成功,提示成功
mongoose.connection.on('connected', function () {
    console.log('MongoDB connected success.');
});

//连接错误
mongoose.connection.on('error', function () {
    console.log('MongoDB connected fail.');
});

//连接失败
mongoose.connection.on('disconnected', function () {
    console.log('MongoDB connected disconnected.');
});
module.exports = mongoose;