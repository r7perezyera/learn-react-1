// ES6 modules, nothing specific to React
import React from 'react';
import ReactDom from 'react-dom';

// stateless functional component, aka dumb component
// we must always return jsx
function Greet() {
  // this essentially is a component (?)
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

// with implicit return
const Person = () => <h2>John Doe</h2>;

// with explicit return
const Message = () => {
  return <p>hello, am message</p>;
};

const Greeting = () => {
  return React.createElement(
    'div',
    {},
    React.createElement('h1', {}, 'Hi there world!')
  );
};

// ReactDom has the render method
ReactDom.render(<Greet />, document.getElementById('root'));
