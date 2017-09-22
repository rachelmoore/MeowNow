import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Hero from './hero';

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user))
});

export default connect(
  null,
  mapDispatchToProps
)(Hero);
