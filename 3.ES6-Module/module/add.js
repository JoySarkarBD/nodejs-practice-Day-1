const add = (a,b) => {
    return a + b;
 }
 
 function add2(a,b) {
     return a + b;
}
 
const num = 200;
 
 /* ES6 Module System(if you want to use ES6 module system then you have to create package,json file in your project and set there "type": "module" like this {"type": "module"}) */
 
 export {
     add,
     add2
}
 
export default num;