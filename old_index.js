const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    // if we visit / or homepage load index.html using fs module
    fs.readFile(
      path.join(__dirname, "public", "index.html"),
      (errors, content) => {
        // if there is errors then throw them
        if (errors) throw errors;
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(content);
      }
    );
  }

//   if user visit /about page
  if (request.url === "/about") {
    // if we visit /about load about.html using fs module
    fs.readFile(
      path.join(__dirname, "public", "about.html"),
      (errors, content) => {
        // if there is errors then throw them
        if (errors) throw errors;
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(content);
      }
    );
  }

// if user visit /api/users

if (request.url === "/api/users") {
    // if we visit / or homepage load index.html using fs module
   const users = [
       {name: 'Haland Smith'},
       {age: 23}
   ];
   response.writeHead(200, { "Content-Type": "application/json" });
//    returing users objects in json format
response.end(JSON.stringify(users));
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`server running on port ${PORT}`));
