// ES6 modules, nothing specific to React
import React from 'react';
import ReactDom from 'react-dom';

function Greet() {
  // this essentially is a component (?)
  return <h1><center>Hello world !!!</center></h1>;
}


// ReactDom has the render method
ReactDom.render(<Greet />, document.getElementById('root'));
