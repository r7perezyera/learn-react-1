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
      />
      <Book
        title="Hard-coded prop!"
        author={book2.author}
        imgUrl={book2.imgUrl}
      />
    </section>
  );
}

// props is short for properties
const Book = ({ title, author, imgUrl, ans }) => {
  // wanna console log? do it right here
  //console.log(props);

  // destructuring props:
  //const {title, author, imgUrl} = props;
  // see parameters, we are destructuring there now

  return (
    <article className="book">
      <img src={imgUrl} alt="Certification book" />
      <h2>{title}</h2>
      <h3>{author}</h3>
      <p>Btw the answer is {ans}</p>

      {/* console.logging here: use curly braces to go to JS land */}
      {/* {console.log('within JSX:',props)} */}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
