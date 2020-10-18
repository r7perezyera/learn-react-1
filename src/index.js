import React from 'react';
import ReactDom from 'react-dom';

import './index.css'


function BookList() {
  return (
    <section className='booklist'>
      <Book />
    </section>
  );
}


const Book = () => {
  return (
    <article className="book">
      <img
        src="https://m.media-amazon.com/images/I/51kMtpaJQNL._SS135_.jpg"
        alt="Certification book"
      />
      <h2>CCNA 200-301 official cert guide</h2>
      <h3>Wendel Odom</h3>
    </article>
  );
};



ReactDom.render(<BookList />, document.getElementById('root'));
