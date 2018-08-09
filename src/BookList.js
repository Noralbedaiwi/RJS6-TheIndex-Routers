import React, { Component } from "react";
import { Link } from "react-router-dom";

// Components
import SearchBar from "./SearchBar";
import BookTable from "./BookTable";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: this.props.books,
      filteredBooks: this.props.books
    };

    this.filterBooks = this.filterBooks.bind(this);
  }

  filterBooks(query) {
    query = query.toLowerCase();
    let filteredBooks = this.state.books.filter(book => {
      return `${book.title}`.toLowerCase().includes(query);
    });
    this.setState({ filteredBooks });
  }

  filterBooksByColor(bookColor) {
    return this.state.filteredBooks.filter(book => book.color === bookColor);
  }

  render() {
    const bookColor = this.props.match.params.bookColor;
    let books;
    let allBooksButton;

    if (!bookColor) {
      books = this.state.filteredBooks;
    } else {
      books = this.filterBooksByColor(bookColor);
      allBooksButton = (
        <Link to="/books">
          <button className="btn">All Books</button>
        </Link>
      );
    }

    return (
      <div className="books">
        <h3>Books</h3>
        <SearchBar changeHandler={this.filterBooks} />
        {allBooksButton}
        <BookTable books={books} />
      </div>
    );
  }
}

export default BookList;
