```js
let user = {
  name: 'Arya',
  sibling: ['Robb', 'Ryan', 'John'],
};
let allBrothers = ['Robb', 'Ryan', 'John'];
let brothersCopy = user.sibling;
let usename = user.name;
let newUser = user;
```

1. Memory representation

- Create the memory representation of the above snippet on notebook.
- Take a photo/screenshot and add it to the folder `code`

![name](IMG_4387.heic)

2. Answer the following with reason:

- `user == newUser;` // true // both of them refer to the same address which contains the object in question.
- `user === newUser;` // true // for the same reason given above.
- `user.name === newUser.name;` // true // end result is a string value 'Arya' which both of these definitions return.
- `user.name == newUser.name;` // true // same reasons given above.
- `user.sibling == newUser.sibling;` // true // both of them return outputs from the same address, hence being true.
- `user.sibling === newUser.sibling;` // true // same as above.
- `user.sibling == allBrothers;` // false // both of these objects are contained in different addesses.
- `user.sibling === allBrothers;` // false // same reason as above.
- `brothersCopy === allBrothers;` // false // refer to similar identical objects but contained in different addresses.
- `brothersCopy == allBrothers;` // false // same as the previous question.
- `brothersCopy == user.sibling;` // true // both of them lead to the same address
- `brothersCopy === user.sibling;` // true // same as above
- `brothersCopy[0] === user.sibling[0];` // true // both of them return the strong value 'Robb'and are equal.
- `brothersCopy[1] === user.sibling[1];` // true // same reasoning given in the previous question.
- `user.sibling[1] === newUser.sibling[1];` // true // both of them return the string value 'Ryan' and are therefore equal.
