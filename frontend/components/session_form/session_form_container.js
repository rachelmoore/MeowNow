import { connect } from 'react-redux';
import { login, logout, signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, { location }) => ({
  signup: (user) => dispatch(signup(user)),
  login: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
