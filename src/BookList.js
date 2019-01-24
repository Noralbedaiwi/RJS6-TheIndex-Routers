import React, { Component } from "react";
import { Link } from "react-router-dom";
// Components
import BookTable from "./BookTable";
import SearchBar from "./SearchBar";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = { filteredBooks: this.props.books };

    this.filterBooks = this.filterBooks.bind(this);
  }

  filterBooks(query) {
    query = query.toLowerCase();
    let filteredBooks = this.props.books.filter(book =>
      `${book.title}`.toLowerCase().includes(query)
    );
    this.setState({ filteredBooks: filteredBooks });
  }
  componentDidMount() {
    this.getBooks();
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.match.params.bookColor !== this.props.match.params.bookColor
    ) {
      this.getBooks();
    }
  }

  getBooks() {
    const color = this.props.match.params.bookColor;
    if (color) {
      let books = this.props.books.filter(book => book.color === color);
      this.setState({ filteredBooks: books });
    } else {
      this.setState({ filteredBooks: this.props.books });
    }
  }

  render() {
    const color = this.props.match.params.bookColor;
    return (
      <div>
        <h3>Books</h3>
        <SearchBar changeHandler={this.filterBooks} />
        <BookTable books={this.state.filteredBooks} />
        {color ? <Link to={"/books"}>All Books</Link> : <div />}
      </div>
    );
  }
}

export default BookList;
