import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function BookList(){
  return (
  <section className="booklist">
    <Book/>
    <Book/>
    <Book/>
    
  </section>
  );
}
const Book = ()=>{
  return <article className="book">
    <img src="https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
    <h1>I Love You to the Moon and Back</h1>
    <h4 style={{color:'#617d98', fontSize: '0.75rem', marginTop: '0.25rem'}}>Amelia Hepworth</h4>
    </article>
}


ReactDOM.render(
  <BookList/>,
  document.getElementById('root')
);
