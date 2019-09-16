import React, { Component } from 'react'

class SearchInput extends Component {
  render() {
    return (
      <div className="search-container">
        <input type="text" className="form-control" placeholder="Search by name" onChange={this.props.handleChange}/>
        <button className="btn btn-primary" onClick={this.props.handelSearch}>Search</button>
      </div>
    )
  }
}

export default SearchInput;
