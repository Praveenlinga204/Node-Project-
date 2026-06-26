//File system in node js

const fs = require("fs");
//mkdir
if (!fs.existsSync("./docs")) {
    fs.mkdir("./docs", (err) => {
        if (err) {
            console.log(err.message)
        } else {
            console.log("Folder Created")
        }
    })
}

fs.writeFile("./docs/file.txt", "Welcome to the zone, we are learning node js here!", (err) => {
    if (err) {
        console.log(err.message)
    } else {
        console.log("File Created")
    }
});

fs.readFile("./docs/file.txt", (err, data) => {
    if (err) {
        console.log(err.message)
    } else {
        console.log(data.toString())
    }
})

