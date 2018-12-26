import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage'
import MainPage from './MainPage'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
    this.setState({ books: books })
  })
}

  render() {
    return (
      <div className="app">
        <MainPage/>
      </div>
    )
  }
}

export default BooksApp
