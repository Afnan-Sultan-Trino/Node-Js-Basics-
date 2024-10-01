// HTTP Routing =>

//At first we need to initialize npm,so in terminal we write "npm init"
//if we want to skip the QNA part,we can write "npm init -y" 
//Now we have to create Server

const http=require("http");
const fs=require("fs");
const PORT=3000;
const hostName="127.0.0.1";

const server=http.createServer((req,res)=>{
   if(req.url==='/'){
    fs.readFile("index.html",(err,data)=>{
        res.writeHead(200,{"Content-type": "text/html"});
        res.write(data);
        res.end();
    });
   }
   else if(req.url==='/about'){
    fs.readFile("about.html",(err,data)=>{
        res.writeHead(200,{"Content-type": "text/html"});
        res.write(data);
        res.end();
    });
    }
    else if(req.url==='/contact'){
        fs.readFile("contact.html",(err,data)=>{
            res.writeHead(200,{"Content-type": "text/html"});
            res.write(data);
            res.end();
        });
        }
});
server.listen(PORT,hostName,()=>{
    console.log(`Server is running at http://${hostName}:${PORT}`);
});

// Now why we need nodemon package? Because if we want change anything,we have cancel the server,again command it through terminal,reload the server then we can see the change
//that's why we need to install nodemon package to solve this problems
//to install it,we need to write in terminal "npm install nodemon" 
//in order to check wether nodemon has installed or not,we can go to package.json and we will see at the bottom dependencies,there will be nodemon
//After that,we go to scipts in package.json and we will write "start" : "nodemon index3.js" here,[index3.js is my file name that's why]
//Because now in terminal ,we just need to write "npm start" to see the change in server
//Now even need to change anything,we can change it and in server,just reload the page and we can see the result
//Now for Routing,we have to write,  console.log(req.url);
//now in terminal,we can see a slash(/),By default,home route contains slash
//In server,if now we write "/about" we can see also in terminal /about
//Our target is based on this url,HTML file reading,so at first we need to create some html file
//after creating html file,we have to read the file,so we have to require it,then impliment the logic 