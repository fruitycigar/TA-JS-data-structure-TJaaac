1. Write the output with reason

```js
const person = {
  firstName: 'John',
  lastName: 'Doe',
};

let person2 = person;

person.firstName = 'Arya';

console.log(person2.firstName); // 'Arya' // The address contaning the memory representation of the object is question was altered through the earlier command. As a result, person2's key value has also changed.
console.log(person.firstName); // 'Arya' // The command person.firstname target the first key value and changed it to 'Arya'.
console.log(person.lastName); // 'Doe' // Remains unchanged as it was not affected in anyway.
console.log(person == person2); // true // Both varaibles have the same address pointing to the same object.
console.log(person === person2); // true // Strict equality does not change the fact that both of them have the same address pointing to the same object.
console.log(person.lastName === person2.lastName); // true // Since the 'lastName' key remains unchanged for both variables, they remain the same and are equal.
```

2. Write the output with reason:

```js
let person = {
  firstName: 'John',
  lastName: 'Doe',
  address: {
    street: 'North 1st',
    city: 'San Jose',
    state: 'CA',
    country: 'USA',
  },
};

let personTwo = { ...person };

person.firstName = 'Arya';
person.city = 'Navada';

console.log(personTwo.firstName); // 'John' // It has been cloned so the output would be the same as that of the firstName key of perso, prior to the change.
console.log(person.firstName); // 'Arya' // The command above alters the key value of person to the present value of 'Arya'.
console.log(personTwo.lastName); // 'Doe' // Being a clone of the person variable, the lastName value is the same as person prior to it's conversions.
console.log(person.firstName === personTwo.firstName); // false // person's firstName is 'Arya' whereas person2's firstName is 'John'.
console.log(person == personTwo); // false // Both person and personTwo contain different addresses referring to similar, but ultimately different objects.
console.log(person === personTwo); // false // Same reason as the preceding question. Tightening the equality parameter does not change anything.
console.log(person.address === personTwo.address); // true // Due to shallow cloning, the address key contains the same memoery representation for both person and personTwo.
console.log(person.address == personTwo.address); // true // Same reason as the preceding question.
console.log(personTwo.address.city); // 'San Jose' // Same as the address.city value for person.
console.log(person.address.city); // 'San Jose'
console.log(person.address.city == personTwo.address.city); // true // Since the address key is the same for both person and person2, this equality will hold true.
```

3. Write the output with reason:

```js
let person = {
  firstName: 'John',
  lastName: 'Doe',
  address: {
    street: 'North 1st',
    city: 'San Jose',
    state: 'CA',
    country: 'USA',
  },
};

let personTwo = { ...person, address: { ...person.address } };

person.firstName = 'Arya';
person.city = 'Navada';

console.log(personTwo.firstName); // 'John'
console.log(person.firstName); // 'John'
console.log(personTwo.lastName); // 'Doe'
console.log(person.firstName === personTwo.firstName); // true // both of those expressions resolve to the string 'John' thereby making it true.
console.log(person == personTwo); // true // person was deep cloned to personTwo, so they share the same memory representations right down to the address key.
console.log(person === personTwo); // true // same reason as above.
console.log(person.address === personTwo.address); // true // Deep cloning enabled them to share the same memory representation.
console.log(person.address == personTwo.address); // true // Stricter form of equality doesn't change the fact that they share the same memory representation, therefore they are true.
console.log(personTwo.address.city); // 'San Jose'
console.log(person.address.city); // 'San Jose'
console.log(person.address.city == personTwo.address.city); // true // both of these expressions resolve to being 'San Jose', so the equality will be true.
```

4. Clone the `blogs` variable into a new variable named `clonedBlogs`

```js
let blogs = [
  {
    id: 1,
    title: 'Post #1',
    body: 'My first blog post',
  },
  {
    id: 2,
    title: 'Post #2',
    body: 'My second blog post',
  },
  {
    id: 3,
    title: 'Post #3',
    body: 'My third blog post',
  },
];

// clonedBlogs = [ ...blogs ];
```

5. Clone the `question` variable into a new variable named `questionClone`

```js
var questions = [
  {
    prompt: 'Why is the sky blue?',
    responses: [
      'Because the color blue was on sale at Wallmart',
      'Because blue is the prettiest color',
      'Because the air molecules difract blue light more than any other color',
    ],
  },
  {
    prompt: 'Why are leaves usually green?',
    responses: [
      'So green caterpillars can hide better.',
      'Because leaves can more easily make energy with green light',
      "Because leaves absorb red and blue light so it's green that is reflected",
    ],
  },
];

// let questionClone = [ ...questions ]'
```

6. Clone the `allBlogs` variable into a new variable named `allBlogsClone`

```js
var allBlogs = {
  id: 1,
  title: 'Alamofire JSON Serialization',
  body: 'All about serialization in Alamofire...',
  author: {
    id: 1,
    fullName: 'Jeff Potter',
    username: 'jpotts18',
  },
  comments: [
    {
      id: 1,
      body: 'Thanks for the help Jeff, this saved me hours',
    },
    {
      id: 2,
      body: 'Your welcome. I am happy to help!',
    },
  ],
};

// let allBlogsClone = [ ...allBlogs ];
```

7. Clone the `person` variable into a new variable named `clonedPerson`

```js
let person = [
  {
    input: { name: 'Ryan' },
    output: { name: 'Ryan' },
  },
  {
    input: { name: { first: 'Ryan', last: 'Haskell-Glatz' } },
    output: { firstName: 'Ryan', lastName: 'Haskell-Glatz' },
  },
  {
    input: { name: 'Ryan', age: 24 },
    output: { name: 'Ryan', age: 24 },
  },
  {
    input: {
      name: { first: 'Ryan', last: 'Haskell-Glatz' },
      birthday: { year: 1993, month: 'Nov' },
    },
    output: {
      firstName: 'Ryan',
      lastName: 'Haskell-Glatz',
      birthdayYear: 1993,
      birthdayMonth: 'Nov',
    },
  },
];

// let clonedPerson = [ ...person ];
```

8. Write a function named `cloneObject` that accepts an object and returns the clone of the object

```js
function cloneObject() {
  // your code
}

// Run the test below to check your function

let user = {
  name: 'John',
  house: 'Stark',
  sisters: ['Arya', 'Sansa'],
};
let cloned = cloneObject(user);

let person = {
  firstName: 'John',
  lastName: 'Doe',
  address: {
    street: 'North 1st',
    city: 'San Jose',
    state: 'CA',
    country: 'USA',
  },
};

let clonedPerson = cloneObject(user);

console.log(
  `The user object is ${
    user == cloned ? `not clone` : `cloned successfully 😁👑`
  }`
);
console.log(
  `The person object is ${
    person == clonedPerson ? `not clone` : `cloned successfully 😁👑`
  }`
);
```
