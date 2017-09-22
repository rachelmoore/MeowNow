import React from 'react';
import { withRouter } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    }
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <div className="search-container">
      <form className="search-form">
        <input type="search"
          className="search-input"
          placeholder="Search by Location"
          onChange={this.update('query')} />
      </form>
      <button><i className="fa fa-search" aria-hidden="true"></i></button>
      </div>
    )
  }
}

export default withRouter(Search);
