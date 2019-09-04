// using template literals build a JS program to check if a person is eligible for a price discount or not
// check if 
// if a registered member - discount is 5% 
// if not registered member - discount is 4%
let Users = [
    {
        name: "user1",
        age: 16
    },
    {
        name: "user2",
        age: 21
    }
]
function calculateDiscount(user) {
    let registered = false;
    Users.map(function (currentValue) {
        if (currentValue.name === user)
        registered = true;
    });
     return `Discount for ${user} is ${registered? "5" : "4"}%`;
}

console.log(calculateDiscount("user1"));
console.log(calculateDiscount("user"));