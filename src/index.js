import React from 'react';
import ReactDom from 'react-dom';

import './index.css'


function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}


const Book = () => {
  return (
  <article className='book'>
    <Image></Image>
    <Title />
    <Author />
  </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/51kMtpaJQNL._SS135_.jpg"
    alt="Certification book"
  />
);

const Title = () => <h2>CCNA 200-301 official cert guide</h2>;

const Author = () => <h3>Wendel Odom</h3>;


ReactDom.render(<BookList />, document.getElementById('root'));
