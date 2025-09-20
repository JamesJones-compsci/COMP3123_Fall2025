var http = require("http");
var employees = require("./Employee")
// Employee.js
console.log("Lab 03 -  NodeJs");


//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {

    console.log(req.method, req.url);
    if (req.method !== 'GET') {
        res.writeHead(405, {"Content-Type": "application/json"});
        res.end(JSON.stringify(`{"error": "${http.STATUS_CODES[405]}"}`))
        return;                 // Stops execution after sending a response
    } else {
        if (req.url === '/') {

            res.writeHead(200, {"Content-Type": "text/html"});
            res.end("<h1>Welcome to Lab Exercise 03</h1>");
        }

        else if (req.url === '/employee') {

            res.writeHead(200, {"Content-Type": "application/json"});
            res.end(JSON.stringify(employees.getAllEmployeeDetails()));
        }

        else if (req.url === '/employee/names') {

            res.writeHead(200, {"Content-Type": "application/json"});
            res.end(JSON.stringify(employees.getEmployeeNames()));
        }

        else if (req.url === '/employee/totalsalary') {

            res.writeHead(200, {"Content-Type": "application/json"});
            res.end(JSON.stringify({ total_salary: employees.getEmployeeTotalSal() }));
    }
        else {
            res.writeHead(404, {"Content-Type": "application/json"});
            res.end(JSON.stringify({ error: http.STATUS_CODES[404] }));
        }
    }
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});