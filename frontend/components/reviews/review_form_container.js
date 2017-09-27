import { createReview } from '../../actions/review_actions';
import { connect } from 'react-redux';
import ReviewForm from './review_form';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.currentUser, 
    userId: state.session.currentUser.id
});

const mapDispatchToProps = dispatch => ({
    createReview: (review) => dispatch(createReview(review))
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(ReviewForm);