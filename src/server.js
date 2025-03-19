const http = require('http');
const server = http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if(req.url == '/'){
    res.write('hello laxman bairu');
    res.end();
    }
    if(req.url === '/api/getUsers'){
       var data = [{
            id:1,
            name:"laxman",
            age:27
        },{
            id:2,
            name:"Dexter",
            age:28
        },{
            id:3,
            name:"snow",
            age:25
        }]
        res.write(JSON.stringify(data));
        res.end();
    }
})
server.listen(3000)