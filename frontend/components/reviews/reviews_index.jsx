import React from 'react';
import { Link } from 'react-router-dom';
import ReviewFormContainer from './review_form_container';

class ReviewsIndex extends React.Component {
    constructor(props) {
        super(props);
        this.deleteReview = this.deleteReview.bind(this);
        // this.updateReview = this.updateReview.bind(this);
    }

    componentDidMount() {
        // const locationId = this.props.location.id;
        // const locationId = this.props.match.params.locationId;
        this.props.getReviews(this.props.locationId);
    }

    deleteReviewButton(review) {
        if (this.props.currentUser) {
            if (this.props.currentUser.id === review.author_id) {
                return (
                    <button onClick={() => this.deleteReview(review)} className="delete-review-button">
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

    displayForm() {
        if (!this.props.currentUser) {
            return (
                <div>
                    <center>
                        <hr className="paw-hr" />
                    </center> 
                    <div className="log-in-to-review">
                        <p>Log In to Review</p>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <center>
                        <hr className="paw-hr" />
                    </center>
                    <ReviewFormContainer authorId={this.props.currentUser.id} locationId={this.props.locationId}/>
                </div>
            );
        }
    }

    deleteReview(reviewId) {
        this.props.deleteReview(reviewId);
    }

    render() {
        if (this.props.reviews.length === 0) {
            return(
                <div>
                    <p>No Reviews</p>
                </div>
            );
        }
        return(
            <div className="reviews-index-container">
                <div className="reviews-content-container"> 
                <div className="reviews-list-container"> 
                    <ul className="reviews-list">
                        {this.props.reviews.map((review, idx) => (
                            <li className="review-container">
                                <div className="review">
                                    <div className="comment-body">
                                        {review.body}
                                    </div>
                                    <div className="review-username-and-buttons">
                                        <div className="review-username-container">
                                            <h4 className="review-username">
                                                -{review.author.username}
                                            </h4>
                                        </div>
                                        <div className="review-buttons">
                                            <div className="delete-review">
                                                {this.deleteReviewButton(review)}
                                            </div>
                                            <div className="edit-review">
                                                {this.updateReviewButton(review)}
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                            </li>
                        ))}
                    
                    </ul>
                    <div className="displayForm">
                        {this.displayForm()}
                    </div>
                </div>
                <div className="reviews-location-info-container">
                    <div className="reviews-location-info-text">
                        <h3 className="location-properties-header">Location Properties:</h3>
                        <p>Number of cats: 3</p>
                        <p>Adoptable: false</p>
                        <p>Free: false</p>
                    </div>
                </div>
                </div>
            </div>
        );
    }

}

export default ReviewsIndex;