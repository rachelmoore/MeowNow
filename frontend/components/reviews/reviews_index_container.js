import { getReviews, deleteReview, updateReview } from '../../actions/review_actions';
import { connect } from 'react-redux';
import ReviewsIndex from './reviews_index';


const mapStateToProps = (state, ownProps) => ({
    reviews: Object.values(state.reviews), 
    currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
    getReviews: (id) => dispatch(getReviews(id)), 
    deleteReview: (review) => dispatch(deleteReview(review)), 
    updateReview: (review) => dispatch(updateReview(review))
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(ReviewsIndex);