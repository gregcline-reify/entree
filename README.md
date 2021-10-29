# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# HTML vs JSX

| HTML | JSX |
|------|-----|
| class | className |
| for | htmlFor |
| style is a string | style is an object |
| styles are lowercase | styles are camelCase |
| must specify unit of measurement | pixel is implied for numbers |

# Day 2 quiz

1. What is react?
   A client side rendering library for the web
2. What is the benefit of doing client-side Development?
   The potential to work without a connection, richer UI than static web pages
   sometimes a snappier UX. Sometimes lower bandwidth requirements.
3. What is JSX?
   Syntax sugar for calls to React.createElement
4. What are props?
   Arguments passed to react components
5. What does JSX compile down to?
   React.createElement
6. What is create react app?
   A template script for setting up a new react application
7. What tools does create react app use behind the scenes and why?
   Node JS, npm, etc
8. What command do you use to start the application?
   npm start
9. Where is the script you’re running?
   In package.json
10. Are there alternatives to create react app? If so how would you find them and why would you consider them?
   There are you can find them on javascriptstuff.com under the react start projects list
11. What does the curly brace mean in JSX?
   Interpolate plain javascript
12. How do you handle public vs private?
   Functions and variables that aren't exported from a module aren't immediately useable, but you
   can probably still get at them.
13. What folder does node install dependencies into?
   node_modules
14. What language are those files written then? Can you view them?
   Javascript and yes
15. Where are our apps dependencies declared?
   package.json
16. What is the syntax for importing react?
   import React from 'react', but you don't always need to do it anymore
17. What is the name for that syntax?
   ES Import, only node uses CommonJS import
18. What if I want to import a specific portion of a file?
   named import syntax
19. When do we use a relative path in import?
   When we are referencing a file local to the project
20. What if we omit the path in an import?
   We are importing from a dependency
21. What does that syntax look like?
   import Blah from 'foo'
22. What is that style of import called?
   ?
23. What JavaScript array method do we use to return a new array?
   Spread syntax
24. What are two ways to create an object in JavaScript?
   JavaScript is a prototypal language. What does that mean?
   New or {}
   You can create a new instance from the prototype of any object
25. What tool are we using to format our code?
   Prettier
26. What is a key? When an why is it useful? What value should we set it to?
   It's used by react to implement some rendering optimizations, we should use
   it when we have a list of things to render. Each key should be unique in the list.
27. What is a pure function? Why is it useful?
   A function that has no side-effect, it just takes input and returns output
   and the output will be the same for the same input
28. What is the computed property syntax? When is it useful?
   It's useful for dynamically choosing the name of a property in an object
   {[event.target.id]: event.target.value}
