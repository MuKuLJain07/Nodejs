# Node.js

Node.js is a JavaScript runtime environment that allows you to run JavaScript code on the server side. It is open-source, cross-platform, and enables developers to execute JavaScript outside of a web browser. Traditionally, JavaScript was used for client-side scripting within browsers to create interactive web experiences. Node.js extends JavaScript's capabilities to the server, making it possible to build backend applications, command-line tools, and more.

## Node Modules

Node modules are reusable blocks of code—JavaScript files or directories—that encapsulate specific functionalities. These modules can be imported and used in other parts of a Node.js application.

**Types of Node Modules:**
- **User-made modules:** Custom modules created by developers.
  To create user-made modules, you need to create a function and export in, then you can import this file as a module in another program and use it's functions.

- **NPM modules:** Packages installed via [npm](https://www.npmjs.com/), the Node Package Manager.

## User Inputs in Node.js Applications

You can provide arguments to a Node.js application via the command line. These arguments are stored in an array accessible through `process.argv`.

**Example:**

To provide arguments through the command line:
```bash
node app.js Mukul
```
node app.js Mukul
```

**Sample Output:**
```js
[
    'C:\\Program Files\\nodejs\\node.exe',
    'M:\\Node.js\\basic_programs\\user_input.js',
    'Mukul'
]
```

- There is a module called yargs which makes these user inputs much more simpler
  {{functionalies of yargs module}}

## Working with Json
1. Writing to JSON file

```js
  const fs = require('fs');

  const user = {
    name: "Mukul",
    age: 25,
    hobbies: ["coding", "reading", "gaming"]
  };

  // Convert object to JSON string and write to file
  fs.writeFile('user.json', JSON.stringify(user, null, 2), (err) => {
    if (err) throw err;
    console.log('Data written to file');
  });

```

2. Reading from a JSON file

```js
  const fs = require('fs');

  fs.readFile('user.json', 'utf8', (err, data) => {
    if (err) throw err;
    
    // Parse JSON string to object
    const user = JSON.parse(data);
    console.log(user.name); // Output: Mukul
    console.log(user.hobbies); // Output: ["coding", "reading", "gaming"]
  });

```


## Asyncronous application in Node js 

## Callback Functions
Javascript is a syncronous language, but you can achieve asyncronous work in js using callback functions.

Example - 
suppose there is a function x which is accepting another function y as it's argument.
```js
const x = function (y) {

}
```

```js
x(function() {

})
```

Now, y is being passed in x, and function x will decide when to call y, hence y is called callback function (it is declared but would be called later)


## ES6 Features