const fs = require("fs");

const http = require("http");

const server = http.createServer((req,res) => {
    if(req.method=="GET")
    
    {
        const log = req.method + " " + req.url
        fs.appendFile("./log.txt",log,(err,data) => {
            if(err){
                console.log("couldnt log");
            }
        })

        if(req.url=="/")
    {
        return res.end("Welcome to home page");
    }
    else if(req.url=="/contact")
    {
        return res.end("Welcome to contact page");
    }
    else if(req.url=="/about")
    {
        return res.end("Welcome to about page");
    }
    else if(req.url=="/details")
    {
        //read from the file and store the data
       const data = fs.readFileSync("./data.txt",{encoding:"utf-8"}) 
       //send that data
       return res.end(data);
    }
    }
    else if(req.method == "POST")
    {
        if(req.url === "/adddetails")
        {
            //get data from the client
            const data = [];
            req.on("data",(chunk) => {
                data.push(chunk)
            })

            //store the data


            res.end("end");
        }
    }

})

server.listen(8080);