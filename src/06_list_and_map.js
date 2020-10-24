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
    title: 'CCNA 200-301 official cert guide!!',
    author: 'Wendel Odom',
    imgUrl: 'https://m.media-amazon.com/images/I/51kMtpaJQNL._SS135_.jpg',
  },
];

const names = ['Valtteri', 'Daniel', 'Lewis'];
const fNames = names.map((name) => {
  console.log(name);
  return <h4>{name}</h4>;
});
console.log(fNames);

function BookList() {
  return (
    // recall: here's where we RENDER the books
    <section className="booklist">{fNames}</section>
  );
}

const Book = (props) => {
  const { title, author, imgUrl, ans } = props;
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
