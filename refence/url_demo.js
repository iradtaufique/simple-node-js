const url = require('url');


// creating url path
const myUrl = new URL(
    'http://example.com/hello.html?id=100&status=active'
);

// getting Serialized url
console.log(myUrl.href)
console.log(myUrl.toString());

// getting the host or root domain 
console.log(myUrl.host)

// getting the hostname and using hostname this does not bring the port
console.log(myUrl.hostname)

// getting the path name
console.log(myUrl.pathname)

// getting the serialized pathname
console.log(myUrl.search)

// getting params objecst
console.log(myUrl.searchParams)

// adding parameters
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
