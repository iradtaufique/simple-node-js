const fs = require("fs");
const path = require("path");

// creating directory

// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) throw err;
//     console.log('Folder create ....')
// })

// creating a file and writting to it.

// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "This is file content",
//   (err) => {
//     if (err) throw err;
//     console.log("File created and content created ...");

//     // appending content to a file
//     fs.appendFile(
//         path.join(__dirname, "/test", "hello.txt"),
//         "append new content to file",
//         (err) => {
//           if (err) throw err;
//           console.log("File content appended ...");
//         }
//       );
//   }
// );


// Reading the file content

// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// renaming a file

fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'renamed.txt'), 
err => {
    if (err) throw err;
    console.log('File rename ...');
}
);