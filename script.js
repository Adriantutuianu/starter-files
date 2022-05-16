// Write a function that takes a list
// and an integer and returns a list
// with up to the n-th element in the list.
//  In case of the integer being bigger
//  than the size of the list, return the original list

// For example:
// take(["apple", "pear", "lemon", "orange"], 2)
// # ["apple", "pear"]

const fruits = ["apple", "pear", "lemon", "orange"];

const calculate = (list, int) => {
  if (int > fruits.length) {
    return list;
  } else {
    const newList = [];
    list.map((item, index) => {
      if (index <= int) {
        newList.push(item);
      }
    });
    return newList;
  }
};

console.log(calculate(fruits, 2));
