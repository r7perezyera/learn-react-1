import React from 'react';
import ReactDom from 'react-dom';

import './index.css';

const books = [
  {
    title: 'CCNA 200-301 official cert guide!!',
    author: 'Wendel Odom',
    imgUrl: 'https://m.media-amazon.com/images/I/51kMtpaJQNL._SS135_.jpg',
  },
  {
    title: 'This is book 2',
    author: 'Author 2',
    imgUrl: 'https://m.media-amazon.com/images/I/51kMtpaJQNL._SS135_.jpg',
  },
];

function BookList() {
  return (
    // recall: here's where we RENDER the books
    <section className="booklist">
      {books.map((book) => {
        const { title, author, img } = book;

        //console.log(book);

        // i can return whatever i want from the map method
        /* return <div>
        <h3>{title}</h3>
        <h4>{author}</h4>
      </div> */
        return <Book book={book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  console.log('someProp: ', props);
  const { title, author, imgUrl } = props.book;
  return (
    <article className="book">
      <img src={imgUrl} alt="Certification book" />
      <h2>{title}</h2>
      <h3>{author}</h3>

      {/* {console.log(props)} */}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
