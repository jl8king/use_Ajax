
var express = require('express');//引入express框架
var app = express();//生成对象
var bodyParser = require('body-parser');//引入body中间键

app.use(express.static('public'));//网页静态路径
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(8080,function(){
	console.log('this is port 8080');
});//生成服务：端口号为8080

app.get('/',function(request,response){
	response.send();
});

app.get('/ajaxHello',function(request,response){
	var requestData = request.query;
	console.log(requestData);
	response.send("jQuery");
});

app.get('/ajaxGet',function(request,response){
	var requestData = request.query;
	console.log(requestData);
	response.send("get的方式");
});

app.post('/ajaxPost',function(request,response){
	var requestData = request.body;
	console.log(requestData);
	response.send("post的方式");
});
