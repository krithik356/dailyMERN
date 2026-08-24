// Daily Project/App 1
const bills = [100,400,3000,1200];
const people = 2;
const percentage = 5;
const result1 = bills.map((bill) => {
    const tip = bill * percentage / 100;
    const total = bill + tip;
    const amountPerPerson = total / people;
    return amountPerPerson;
});
const result2 = bills.filter((bill) =>{
    return bill>1000;
});
const result3 = bills.reduce((sum,bill) =>{
    return sum+bill;
},0);
console.log(result1);
console.log(result2);
console.log(result3);