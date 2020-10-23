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


const author = 'Wendel Odom';
const Book = () => {
  const title = 'CCNA 200-301 official cert guide!!';
  return (
    <article className="book">
      <img
        src="https://m.media-amazon.com/images/I/51kMtpaJQNL._SS135_.jpg"
        alt="Certification book"
      />
      
      {/* ONLY values here. NO JS statements */}
      {/* but takeaway is we can acces JS within our JSX */}
      <h2>{title}</h2>
      <h3>{author.toUpperCase()}</h3>
      
      {/* forbidden */}
      {/* <p>{let x = 6}</p> */}

      {/* this is OK, im returning a value */}
      <p>{41 + 1}</p>
    </article>
  );
};



ReactDom.render(<BookList />, document.getElementById('root'));
