import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            location_id: null, 
            user_id: null, 
            body: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const review = this.state;
        review.location_id = this.props.locationId;
        review.user_id = this.props.userId;
        this.props.createReview({ review });
        this.setState({body: ""});
    }

    render() {
        return (
            <div className="review-form-container">
                <form className="review-form-box" onSubmit={this.handleSubmit}>

                    <div className="login-form">

                        <label>Body
                             <input type="text"
                                className="review-input"
                                placeholder="Your review here"
                                onChange={this.update('username')}
                                value={this.state.body}
                                />
                        </label>

                        <div className="review-button-container">
                            <button className="review-button" onClick={this.handleSubmit}>
                                Submit Review
                            </button>
                        </div>

                    </div>

                </form>
                
            </div>
        );
    }
}

{/* <div className="errors-container">
    <center>{this.renderErrors()}</center>
</div>  */}

export default withRouter(ReviewForm);

