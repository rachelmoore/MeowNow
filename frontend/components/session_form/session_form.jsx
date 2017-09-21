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
    this.update = this.update.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    console.log(this.state);
  }

  closeModal() {
    this.setState({ modalOpen: false })
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
    return (
      <div className="nav-container">

        <div className="logo-container">
          <h2>MeowNow</h2>
          <img src="https://i.imgur.com/dPJ7A0L.png" />
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
              {this.renderErrors()}

              <div className="login-form">

                <label>Username
                  <input type="text"
                    className="modal-input"
                    value={this.state.username}
                    onChange={this.update('username')}
                    />
                </label>

                <label>Password
                  <input type="text"
                    className='modal-input'
                    value={this.state.password}
                    onChange={this.update('password')}
                    />
                </label>

                <div className="modal-button-container">
                  <button className="modal-button" onClick={this.handleSubmit}>
                    {this.modalButton()}
                  </button>
                  <button className="modal-button" onClick={this.handleSubmit}>
                    Demo Login
                  </button>
                </div>

              </div>

            </form>
          </div>

        </Modal>
      </div>
    );
  }

}

export default withRouter(SessionForm);




// <div className="nav-container">
// <nav className="login-signup">
//   <Link to="/login">Log In</Link>
//   <br />
//   <Link to="/signup">Sign Up</Link>
// </nav>
// <div className="login-form-container">
//   <form onSubmit={this.handleSubmit} className="login-form-box">
//     Welcome to MeowNow!
//     <br/>
//     {this.renderErrors()}
//     <div className="login-form">
//       <br/>
//       <label>Username
//         <input type="text"
//           value={this.state.username}
//           onChange={this.update('username')}
//           className="login-input" />
//       </label>
//       <br/>
//       <label>Password
//         <input type="password"
//           value={this.state.password}
//           onChange={this.update('password')}
//           className="login-input" />
//       </label>
//       <br/>
//       <input type="submit" value="Submit" />
//     </div>
//   </form>
// </div>
// </div>
