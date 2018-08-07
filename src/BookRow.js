import React, { Component } from "react";
import { Link } from "react-router-dom";

class BookRow extends Component {
  render() {
    const book = this.props.book;
    const authors = book.authors.map(author => (
      <div key={author.name}>
        <Link to={`/authors/${author.id}`}>{author.name}</Link>
      </div>
    ));
    return (
      <tr>
        <td>{book.title}</td>
        <td>{authors}</td>
        <td>
          <button className="btn" style={{ backgroundColor: book.color }} />
        </td>
      </tr>
    );
  }
}

export default BookRow;
