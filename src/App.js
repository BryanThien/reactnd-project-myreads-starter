import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage'
import MainPage from './MainPage'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  
  getAll() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
}

componentDidMount() {
    this.getAll();
}

moveShelf = (book, shelf) => {
  BooksAPI.update(book, shelf);

  this.getAll();
}

  render() {
    
    return (
      <div className="app">
        <MainPage
          books={this.state.books}
          moveShelf={this.moveShelf}
        />
      </div>
    )
  }
}

export default BooksApp
