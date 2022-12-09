//  ==============================
//  🔵 ARRAY
//  ==============================

let array = [12, 5, 7, 8, 12, 9, 10, 23, 44, 223];

//🟡 length of an array
console.log("Lenght of an array : ", array.length);

//🟡 Accessing array elements

// -> using map method
array.map((e) => {
  console.log(e);
});

// -> using for loop
for (let i = 0; i < array.length - 1; i++) {
  console.log(i);
}

//🟡 Insert value at specific position manually

let position = 5;
let value = 1000;

// Before Insertion
console.log(array)
for (let i = array.length - 1; i > position; i--) {
  array[i + 1] = array[i];
}

array[position] = value

// After Insertion
console.log(array)