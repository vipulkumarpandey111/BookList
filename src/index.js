// import React from 'react'
import ReactDom from "react-dom";

import "./index.css";
// Stateless React component which returns JSX

//with js file we don't need .js extension
import { books } from "./books";

import Book from "./Book";

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author } = book;
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

// mention what component to render and where to render
ReactDom.render(<BookList />, document.getElementById("root"));
