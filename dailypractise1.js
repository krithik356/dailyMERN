// Daily Task 
// create 5 functions using arrow syntax and destructuring

const add = ((a,b) => {
    return a+b;
});
const show = ((...numbers) => {
    return numbers;
});
const subtract = ((a,b) => {
    return a-b;
});
const multiply = ((a,b) => {
    return a*b;
});
const divide = ((a,b) => {
    return a/b;
});
const a = add(1,9);
console.log(a);
const b = subtract(1,9);
console.log(b);
const c = show(1,9,10,11,13);
console.log(c);
const d = multiply(1,9);
console.log(d);
const e = divide(6,2);
console.log(e);

// fetching data from public api using async await 

async function load(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if(res.ok){
        console.log("GOT IT");
    }else{
        console.log("NOOO");
    }
}
load();