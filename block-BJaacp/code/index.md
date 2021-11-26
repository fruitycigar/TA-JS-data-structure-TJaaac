1. What will be the output and explain the reason.

```js
let obj = { name: 'Arya' };
obj = { surname: 'Stark' };
let newObj = { name: 'Arya' };
let user = obj;
let arr = ['Hi'];
let arr2 = arr;
```

Answer the following with reason after going through the above code:

- `[10] === [10]` // false // Different arrays, different addresses.
- What is the value of obj? // { surname: 'Stark' };
- `obj == newObj` // false // different arrays, different addresses.
- `obj === newObj` // false // Same as the previous question.
- `user === newObj` // false // They point to arrays of different addresses.
- `user == newObj` // false // Same as the preceding question.
- `user == obj` // true // They point to the same array.
- `arr == arr2` // true // Point to the same array (using the same address).
- `arr === arr2` // true // Same as the the preceding question.

2. What's will be the value of `person1` and `person2` ? Explain with reason. Draw the memory representation diagram.

<!-- To add this image here use ![name](./hello.jpg) -->

```js
function personDetails(person) {
  person.age = 25;
  person = { name: 'John', age: 50 };
  return person;
}
var person1 = { name: 'Alex', age: 30 };
var person2 = personDetails(person1);
console.log(person1);
console.log(person2);
```

// person1 = { name: 'Alex', age: 30 }
person2 = { name: 'John', age: 50 }

3. What will be the output of the below code:

```js
var brothers = ['Bran', 'John'];
var user = {
  name: 'Sansa',
};
user.brothers = brothers;
brothers.push('Robb');
console.log(user.brothers === brothers); // true
console.log(user.brothers.length === brothers.length); // true
```
