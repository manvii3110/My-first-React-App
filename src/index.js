import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const books=[
  {
    id:1,
  img: 'https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_UY327_FMwebp_QL65_.jpg' ,
  title: 'I Love You to the Moon and Back',
  author: 'Amelia Hepworth',
  },
  {
    id:2,
    img:'https://m.media-amazon.com/images/I/91NBDxB0JyL._AC_UY327_FMwebp_QL65_.jpg',
    title:'Our Class is a Family',
    author:' Shannon Olsen',
  },
  {
    id:3,
    img:'https://m.media-amazon.com/images/I/61n9L8w08sL._AC_UY327_FMwebp_QL65_.jpg',
    title:'The Vanishing Half: Sunday Times Bestseller',
    author:' Brit Bennett',
  },
];
function BookList(){
  return (
  <section className="booklist">
    {books.map((book)=>{
       return(
         <Book key={book.id} book={book}></Book>
       );
    })}
    
    
  </section>
  );
}
const Book = (props)=>{
  const{ img, title, author} = props.book;
  return <article className="book">
    <img src={img} alt=""/>
    <h1>{title}</h1>
    <h4>{author}</h4>
    </article>
}


ReactDOM.render(
  <BookList/>,
  document.getElementById('root')
);
