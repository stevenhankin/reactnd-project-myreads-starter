import React from 'react';
import { Link } from 'react-router-dom';
import BookList from './BookList';
import { search } from './BooksAPI';

class SearchPage extends React.Component {
  /*
  SearchPage is a Controlled Component
  */
  state = { searchText: '', books: [] };
  handleChange = event => {
    const newText = event.target.value.trim();
    this.setState({ searchText: newText });
    if (newText.length > 0) {
      search(newText).then(books => {
        console.dir(books);
        this.setState({ books });
      });
    }
  };
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.searchText}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="search-books-results">
          <BookList books={this.state.books} />
        </div>
      </div>
    );
  }
}

export default SearchPage;
