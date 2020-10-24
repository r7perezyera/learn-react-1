import React from 'react';
import ReactDom from 'react-dom';

import './index.css'

const books = [
  {
    title: 'CCNA 200-301 official cert guide!!',
    author: 'Wendel Odom',
    imgUrl: 'https://m.media-amazon.com/images/I/51kMtpaJQNL._SS135_.jpg'
  },
  {
    title: 'CCNA 200-301 official cert guide!!',
    author: 'Wendel Odom',
    imgUrl: 'https://m.media-amazon.com/images/I/51kMtpaJQNL._SS135_.jpg',
  }
];

function BookList() {
  return (
    // recall: here's where we RENDER the books
    <section className='booklist'>
      <Book 
        title={books[0].title}
        author={books[0].author}
        imgUrl={books[0].imgUrl}
        ans={42}
        />

      <Book title="Hard-coded prop!" author={books[1].author} imgUrl={books[1].imgUrl} />
    </section>
  );
}

const Book = (props) => {
  const {title, author, imgUrl, ans} = props;
  return (
    <article className="book">
      <img src={imgUrl} alt="Certification book" />
      <h2>{title}</h2>
      <h3>{author}</h3>
      <p>Btw the answer is {ans}</p>

      {console.log(props)}
    </article>
  );
};



ReactDom.render(<BookList />, document.getElementById('root'));
