import React from 'react';
import { Link } from 'react-router-dom';
import ReviewsIndexContainer from './reviews_index_container';

class ReviewsIndex extends React.Component {
    componentDidMount() {
        // const locationId = this.props.location.id;
        console.log(this.props);
        // const locationId = this.props.match.params.locationId;
        this.props.getReviews(this.props.locationId);
    }

    deleteReviewButton(review) {
        if (this.props.currentUser) {
            if (this.props.currentUser.id === review.author_id) {
                return (
                    <button onClick={() => this.deleteReview(review.id)} className="delete-review-button">
                        Delete Review
                    </button>
                );
            } 
        }
    }

    updateReviewButton(review) {
        if (this.props.currentUser) {
            if (this.props.currentUser.id === review.author_id) {
                return (
                    <button onClick={() => this.updateReview(review.id)} className="update-review-button">
                        Update Review
                    </button>
                );
            }
        }
    }

    deleteReview(reviewId) {
        this.props.deleteReview(reviewId);
    }

    render() {
        // console.log(this.props);
        if (this.props.reviews.length === 0) {
            return(
                <div>
                    <p>No Reviews</p>
                </div>
            );
        }
        return(
            <div className="reviews-list-container"> 
                <ul className="reviews-list">
                    {this.props.reviews.map((review, idx) => (
                        <li className="review-container">
                            <div className="review">
                                <h4 className="review-username">
                                    {review.author.username}
                                </h4>
                                <div className="comment-body">
                                    {review.body}
                                </div>
                            </div>
                            <div className="review-buttons">
                                <div className="delete-review">
                                    {this.deleteReviewButton(review)}
                                </div> 
                                <div className="edit-review">
                                    {this.updateReviewButton(review)}
                                </div>
                            </div> 
                        </li>
                    ))}
                   
                </ul>
            </div>
        );
    }

}

export default ReviewsIndex;