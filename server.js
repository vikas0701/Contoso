

var express =require("express");  
var app=express();  

var onAboutUs=function(req, res){
    res.send("Developer : Vikas Dandge");
};
var onDefault=function(req, res){
    res.send("<h1>Contoso Multinational Company</h1>"+
              "<hr/>"+
              "<ol>"+
                    " <li>Contoso is a multinational company </li>"+
                    " <li>has their 12 Offices all over world.</li>"+
                    " <li>They want to deploy business application </li>"+
                    " <li>on public cloud with the help of Platform As A Service.</li>"+
             "</ol>");
};
app.get("/",onDefault);  
app.get("/aboutus",onAboutUs);  

app.all('*',function(req,res){
    res.sendfile(__dirname+"/index.html");
});

var server=app.listen(8081);
console.log("Server is running on port 8081");

