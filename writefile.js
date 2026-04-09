const fs = require("fs")
const content = 'Hello, this is a CommonJS write operation!';

fs.writeFile('example.txt', content, (err) => {
if (err) {
    console.log("Error");
    return;
}console.log("Done")
});