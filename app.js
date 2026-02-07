const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

// Helper function to serve HTML files
function serveFile(res, filePath) {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end("<h1>404 Page Not Found</h1>");
        } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        }
    });
}

const server = http.createServer((req, res) => {
    console.log("Request URL:", req.url);

    if (req.url === "/" || req.url === "/index.html") {
        serveFile(res, path.join(__dirname, "index.html"));
    } 
    else if (req.url === "/login") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Login Page</h1><p>Login functionality coming soon</p>");
    } 
    else if (req.url === "/signup") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Sign Up Page</h1><p>Signup functionality coming soon</p>");
    } 
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 Page Not Found</h1>");
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
