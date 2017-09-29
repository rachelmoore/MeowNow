import React from 'react';
import { withRouter } from 'react-router-dom';



class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchCity(this.state.query).then(
      () => {
        if (this.props.locations.hash !== "/locations") {
          this.props.history.push("/locations")
        }
      });
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <div className="search-container">
      <form className="search-form" onSubmit={ this.handleSubmit }>
        <input type="search"
          className="search-input"
          placeholder="Search by City"
          onChange={this.update('query')} />
        <button className="search-button"><i className="fa fa-search fa-2x" aria-hidden="true"></i></button>
      </form>
      </div>
    )
  }
}

export default withRouter(Search);
