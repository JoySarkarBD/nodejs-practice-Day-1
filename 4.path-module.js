const path = require("path");

// console.log(__dirname); // return the full current directory path
// console.log(__filename); // return the full current file path

const filePath = __filename;
console.log(path.basename(filePath)); // take a file path or directory path and return the basename
console.log(path.dirname(filePath)); // take a file path and return the directory path of the file
console.log(path.extname(filePath)); // take a file path and return the file extension name.
console.log(path.isAbsolute(filePath)); // take a path and return (true/false ) the path is absolute or not.
console.log(path.join('user', 'practice-1', 'node', 'index.js')); // take name and return the full path after joining
console.log(path.resolve('user', 'practice', 'node//new', 'index.js')); // take name and return the full path after joining and it also fix the mistakes 
console.log(path.parse('/home/user/dir/file.txt')); // return a path object);
console.log(path.format({
    root: '/ignored',
    dir: '/home/user/dir',
    base: 'file.txt'
})); // used to return a path string from the given path object.