# Node.js

Node.js is a JavaScript runtime environment that allows you to run JavaScript code on the server side. It is open-source, cross-platform, and enables developers to execute JavaScript outside of a web browser. Traditionally, JavaScript was used for client-side scripting within browsers to create interactive web experiences. Node.js extends JavaScript's capabilities to the server, making it possible to build backend applications, command-line tools, and more.

## Node Modules

Node modules are reusable blocks of code—JavaScript files or directories—that encapsulate specific functionalities. These modules can be imported and used in other parts of a Node.js application.

**Types of Node Modules:**
- **User-made modules:** Custom modules created by developers.
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

