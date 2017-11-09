import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import About from './about';

const mapDispatchToProps = (dispatch) => ({
    login: (user) => dispatch(login(user))
});

export default connect(
    null,
    mapDispatchToProps
)(About);
