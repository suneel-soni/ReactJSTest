import React, { Component } from 'react'

class List extends Component {
  render() {
    return (
      <div className="table-container">
        {this.props.loader === true ? <div className="loader-container"><img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" /> Fetching Result</div> : ''}
        <table className="table">
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Gender</td>
            </tr>
          </thead>
          <tbody>
            {this.props.lists.length === 0 ? <tr><td colSpan="3">Sorry No Matches found.</td></tr> :
              this.props.lists.map((list, i) =>
                <tr key={i}>
                  <td>{list._id}</td>
                  <td>{list.name}</td>
                  <td>{list.gender}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default List;
