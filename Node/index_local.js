/*
// console.log('Hello from Node.js')

const person  = require('./person')    


console.log(person)
console.log(person.name)
console.log("**********************")

const Person = require('./Person_class') // this is common js
// import Person from './Person_class this is ES6 not yet available in Node
const p1 = new Person('Keval', 31)
p1.greeting()


console.log("----------------------------------------------------------")
*/
/*
const Logger = require('./logger')
const logger = new Logger()
logger.on('message', data => console.log('Called Listener', data))

logger.log('Hello World!!!')*/


const http = require('http')
const path = require('path')
const fs = require('fs')
const { compileFunction } = require('vm')

const server = http.createServer((req,res) => {
    //console.log(req.url)
     /* if(req.url === '/'){
        fs.readFile(
            path.join(__dirname,'public','index.html'),
         (err,content) => {
                if(err) throw err;
          res.writeHead(200,{'Content-Type': 'text/html'})
          res.end(content)
            } )} 
        
            else if(req.url === '/api/users'){
            const users = [
                {name : 'Keval Kavle',age:31},
                {name : 'Asawari',age:28},
                          ]    
                        
            res.writeHead(200,{'Content-Type': 'application/json'})
            res.end(JSON.stringify(users))
            
            }  */


            // Build Dynamic File Path
            let filePath = path.join(
                __dirname,
                 'public', 
                 req.url==='/' ? 'index.html' : req.url 
                 )
            //console.log(filePath)
            res.end()
            
            
            //Extension of the file
            let extname = path.extname(filePath)
            //console.log(extname)
            
            // initial content type
            let contentType = 'text/html'
            // check extension and set conteent type accordingly
            switch (extname) {
                case ".js":
                  contentType = "text/javascript";
                  break;
                case ".css":
                  contentType = "text/css";
                  break;
                case ".json":
                  contentType = "application/json";
                  break;
                case ".png":
                  contentType = "image/png";
                  break;
                case ".jpg":
                  contentType = "image/jpg";
                  break;
              }
              console.log("********")
              console.log(contentType)
              console.log(filePath)
              console.log(extname)
              console.log("********")
              /*
              //Read File

              fs.readFile(filePath,(err,content) => { 
                  console.log(content)
                  if(err) {
                  if (err.code == 'ENOENT'){
                      //page not found
                      fs.readFile(path.join(__dirname,'public','404.html'), (err,content) => {
                          res.writeHead(200,{'Content-Type':'text/html'})
                          res.end(content,'utf8')
                          
                      })

                  }
                  else {
                      //some server error
                      res.writeHead(500)
                      res.end(`Server Error ${err.code}`)
                  }
                  }
                  else {
                      // success
                      res.writeHead(200,{'Content-Type': contentType})
                      res.end(content,'utf-8')
                  }
                 }
              )
*/
        }) 

const PORT = process.env.PORT || 5000
server.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`))