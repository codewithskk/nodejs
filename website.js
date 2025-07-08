const http = require('http')
const fs = require('fs')

const port = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
    console.log(req.url);
   
    res.setHeader('Content-Type', 'text/html')
    if(req.url === '/'){
          res.statusCode = 200
         const data = fs.readFileSync('index.html')
             res.end(data.toString())
        
    }else if(req.url === '/about'){
         res.statusCode = 200
             res.end('<h1>About Sumant Rai</h1> <p>Hey this is about sumant rai</p>')
    }else if(req.url === '/hello'){
         res.statusCode = 200
           res.end('<h1>This is Sumant Rai</h1> <p>Hey this is the way to rock the world!</p>')
    }else{
        // res.sumant();
         res.statusCode = 404
             res.end('<h1>Page is Not Found</h1> <p>Hey this is Not Found</p>');
         
    }
    
   
 
})


server.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
    
})