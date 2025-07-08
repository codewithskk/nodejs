const fs = require('fs');

// fs.readFile('file.txt','utf8',(err,data)=>{                            // Async task 
//     console.log(err,data);
    
// })

// const a = fs.readFileSync('file.txt')
// console.log(a.toString());

// fs.writeFile("file2.txt","This is a data",()=>{
//     console.log("written to the file");
    
// })

const b = fs.writeFileSync("file3.txt","I love you shubhangi")
console.log(b);

console.log("finished reading file");                              
