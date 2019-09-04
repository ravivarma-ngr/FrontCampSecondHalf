
let course = {

}


// use  reflect API to define property,  delete a property, getOwnpropertydescriptor details
// property to define - name with value as "Javascript", make it read only (writable : false)
// property to define - duration with value as "3 hours", make it read only (writable : false)
// getOwnpropertydescriptor - check and print metadata about name property
Reflect.defineProperty(course, 'name', {value: "Javascript",enumerable:true,writable:false});
Reflect.defineProperty(course, 'duration', {value: 2,enumerable:true,configurable:true,writable:false});
console.log("Before Delete :",course);
Reflect.deleteProperty(course, 'duration');
console.log("After Delete :",course);

console.log(Reflect.getOwnPropertyDescriptor(course, 'name'));
