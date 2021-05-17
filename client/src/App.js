import React from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Books from "./features/books/Books";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="nav">
          <Link to="#" className="link">
            <h1>Book Store</h1>
          </Link>
          <ul className="navlist">
            <li>
              <Link to="#" className="link">
                Books
              </Link>
            </li>
            <li>
              <Link to="#" className="link">
                Books
              </Link>
            </li>
          </ul>
        </nav>
        <main className="main">
          <div className="screen">
            <Route exact path="/" component={Books}></Route>
          </div>
        </main>
        <footer className="footer"></footer>
      </div>
    </Router>
  );
}

export default App;
