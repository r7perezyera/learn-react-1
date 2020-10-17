import React from 'react';
import ReactDom from 'react-dom';


function Greet() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

// with implicit return
const Person = () => <h2>John Doe</h2>

// with explicit return
const Message = () => {
  return <p>hello, am message</p>;
}


const Greeting = () => {
  return React.createElement(
    'div',
    {},
    React.createElement('h1', {}, 'Hi there world!')
  );
};

ReactDom.render(<Greet />, document.getElementById('root'));
