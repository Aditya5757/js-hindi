const myArr = [0, 1, 2, 3, 4, 5]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);

myArr.push(6) // insert at last
myArr.push(7)
myArr.pop() // removes from last

myArr.unshift(9) // insert at beginning
myArr.shift()  // remove from beginning

console.log(myArr.includes(9)); //boolean false
console.log(myArr.indexOf(3));


const newArr = myArr.join //converts array to string
console.log(newArr);

// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3) // doesn't include the last element and doesn't manupulate the array

console.log(myn1);

console.log("B ", myArr)

const myn2 = myArr.splice(1,3)
console.log(myn2);  // includes the last element and manupulates the array