import React from 'react';
import ReactDom from 'react-dom';

import './index.css';

const book1 = {
  title: 'CCNA 200-301 official cert guide!!',
  author: 'Wendel Odom',
  imgUrl: 'https://m.media-amazon.com/images/I/51kMtpaJQNL._SS135_.jpg',
};
const book2 = {
  title: 'CCNA 200-301 official cert guide!!',
  author: 'Wendel Odom',
  imgUrl: 'https://m.media-amazon.com/images/I/51kMtpaJQNL._SS135_.jpg',
};

function BookList() {
  return (
    // recall: here's where we RENDER the books
    <section className="booklist">
      <Book
        title={book1.title}
        author={book1.author}
        imgUrl={book1.imgUrl}
        ans={42}
      >
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
          tempore commodi illo fugiat dicta alias aliquid ad harum, et
          voluptatum.
        </p>
      </Book>
      <Book
        title="Hard-coded prop!"
        author={book2.author}
        imgUrl={book2.imgUrl}
      />
    </section>
  );
}

const Book = (props) => {
  const { title, author, imgUrl, ans, children } = props;
  return (
    <article className="book">
      <img src={imgUrl} alt="Certification book" />
      <h2>{title}</h2>
      {children}
      <h3>{author}</h3>
      <p>Btw the answer is {ans}</p>

      {console.log(props)}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
