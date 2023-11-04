let myDate = new Date()
console.log(myDate.toString()); //Sat Nov 04 2023 13:57:50 GMT+0000
console.log(myDate.toDateString()); //Sat Nov 04 2023
console.log(myDate.toLocaleDateString()); // 11/4/2023
console.log(myDate.toLocaleString()); // 11/4/2023, 1:57:50 PM
console.log(myDate.toISOString()); // 2023-11-04T13:57:50.252Z
console.log(myDate.toJSON()); // 2023-11-04T13:57:50.252Z
console.log(typeof myDate); //object

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()

console.log(Math.floor(myTimeStamp/1000)); // in seconds

let newDate = new Date()
console.log(newDate.getMonth());

newDate.toLocaleString('default', {weekday: "Long"})
