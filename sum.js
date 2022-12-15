const add=(a,b)=>a+b;
// console.log(add(10,5));
// console.log(process.argv);
const[ , ,n1,n2]=process.argv;
console.log(add(+n1,+n2));