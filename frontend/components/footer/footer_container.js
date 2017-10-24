import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Footer from './footer';

const mapDispatchToProps = (dispatch) => ({
    login: (user) => dispatch(login(user))
});

export default connect(
    null,
    mapDispatchToProps
)(Footer);
