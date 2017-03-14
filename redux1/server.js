var express = require("express");
var webpackDevServer = require("webpack-dev-middleware");
var webpackHotMiddleWare = require("webpack-hot-middleware");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config");

var app = new express();

console.log("is dev");
var compiler = webpack(webpackConfig);
// 将webpack编译完的信息放置在内存中,然后可以通过 publicPath/a.js的方式获得
app.use(webpackDevServer(compiler, {
    publicPath: webpackConfig.output.publicPath
}));
// 接受 http://localhost:8080/__webpack_hmr消息
app.use(webpackHotMiddleWare(compiler));


app.get("/", (req, res)=> {
    res.sendFile(__dirname + "/index.html");
});

app.get("/date", (req, res)=> {
    setTimeout(()=>{
        res.json({now: new Date().getTime()});
    },1000);
});

app.listen(8082, (err)=> {
    if (err) {
        console.log(err);
        os.exit(1);
    } else {
        console.log("express server serves at 8082");
    }
});