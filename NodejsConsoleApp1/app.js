//the app shows how to prompt in nodejs
console.log("will ask what's you name.");
process.stdin.setEncoding('utf8');
var name;
process.stdin.on('readable', function () {
    name = process.stdin.read();
    if (name !== null) {
        console.log("Hello! ".concat(name, ". How are you"));
        process.exit();
    }
});