import React, { Component } from 'react'
import SeachInput from './SearchInput'
import List from './List';

import { data } from '../data'

class Search extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      lists: [],
      loader: false
    }
  }

  handleChange = event => {
    this.setState({ query: event.target.value })
  }

  handelSearch = () => {
    let searcjQery = this.state.query.toLowerCase();

    let lists = data.filter((el) => {
      let searchName = el.name.toLowerCase();
      return searchName.indexOf(searcjQery) !== -1;
    })

    this.setState({ loader: true })

    setTimeout(() =>
      this.setState({
        lists: lists, loader: false
      })
      , 2000)
  }

  componentWillMount() {
    this.setState({
      lists: data
    })
  }


  render() {
    return (
      <div>
        <SeachInput handelSearch={this.handelSearch} handleChange={this.handleChange} />
        <List lists={this.state.lists} loader={this.state.loader} />
      </div>
    )
  }
}


export default Search;