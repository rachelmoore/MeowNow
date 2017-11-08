import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import ModalStyling from './modal_styling';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      modalOpen: false,
      formType: "Log In"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
    this.update = this.update.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal() {
    this.setState({ modalOpen: false })
    this.props.clearErrors();
  }

  openModal(type) {
    this.setState({ modalOpen: true, formType: type })
  }

  modalButton() {
    if (this.state.formType === "Log In") {
      return "Log In";
    } else {
      return "Sign Up";
    }
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    if (this.state.formType === "Log In") {
      this.props.login(user);
    } else {
      this.props.signup(user);
    }
  }

  handleDemoSubmit(e) {
    e.preventDefault();
    this.props.demoLogin();
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


  render() {
    if (this.props.loggedIn) {
      return null; 
    } else {
    return (
      <div className="nav-container">

        <div className="logo-container">
          <h2>MeowNow</h2>
          <Link to="/"><img src="http://hellahoops.com/catdoodletransparent.png" height="50px" className="nav-logo-img" /></Link>
        </div>

        <div className="login-signup-buttons">
          <button className="login-button" onClick={this.openModal.bind(this, "Log In")}>Log In</button>
          <button className="signup-button" onClick={this.openModal.bind(this, "Sign Up")}>Sign Up</button>
        </div>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={ModalStyling}>

          <div className="modal-form-container">
            <form className="login-form-box">

              <div className="modal-logo">
                  <h2 className="modal-logo-text">MeowNow</h2>
                  <img src="http://hellahoops.com/catdoodletransparent.png" height="65px" />
              </div>

              <div className="login-form">

                <label className="modal-label">Username
                  <input type="text"
                    className="modal-input"
                    value={this.state.username}
                    onChange={this.update('username')}
                    />
                </label>

                <label className="modal-label">Password
                  <input type="password"
                    className='modal-input'
                    value={this.state.password}
                    onChange={this.update('password')}
                    />
                </label>

                <div className="modal-button-container">
                  <button className="modal-button" onClick={this.handleSubmit}>
                    {this.modalButton()}
                  </button>
                  <button className="modal-button" onClick={this.handleDemoSubmit}>
                    Demo Login
                  </button>
                </div>

                <div className="errors-container">
                  <center>{this.renderErrors()}</center>
                </div>

              </div>

            </form>
          </div>

        </Modal>
      </div>
    );
    }
  }

}

export default withRouter(SessionForm);
