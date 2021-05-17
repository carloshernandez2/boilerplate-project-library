import React from "react";
import { bookState } from "./bookSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Books = () => {
  const bookList = useSelector(bookState);
  return (
    <ul className="fit-screen">
      <li>
        <h2>Title</h2>
        <h2>Commentcount</h2>
        <h2>Comments</h2>
      </li>
      {bookList.map((book) => (
        <li key={book._id}>
          <Link to="#" className="link">
            <h2>{book.title}</h2>
          </Link>
          <p>{book.commentcount}</p>
          <Link to="#" className="link">
            See
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Books;
