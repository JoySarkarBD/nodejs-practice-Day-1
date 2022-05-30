const add = (a,b) => {
   return a + b;
}

function add2(a,b) {
    return a + b;
}


/* common js module system. If there is a file package.json in your project, there should be something like this {"type": "module" }.It happens when you use ES6 module to run your programme. You just simply need to  {"type": "module" } into {"type": "commonjs".}*/

module.exports = {
    add, add2
}
module.exports.number = 100;