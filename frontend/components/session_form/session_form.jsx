import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import ModalStyling from './modal_styling';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentWillReceiveProps(newProps) {
  //   if (newProps.loggedIn) {
  //     this.props.history.push("/");
  //   }
  // }

  update(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">Sign Up</Link>;
    } else {
      return <Link to="/login">Log In</Link>;
    }
  }

  render() {
    return (
      <div className="nav-container">
      <nav className="login-signup">
        <Link to="/login">Log In</Link>
        <br />
        <Link to="/signup">Sign Up</Link>
      </nav>
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to MeowNow!
          <br/>
          Please {this.props.formType} or {this.navLink()}
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>Username
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input" />
            </label>
            <br/>
            <label>Password
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input" />
            </label>
            <br/>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
      </div>
    );
  }

}

export default withRouter(SessionForm);
