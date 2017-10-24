import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            location_id: this.props.match.params.locationId, 
            author_id: this.props.currentUser.id, 
            body: "", 
            rating: 5
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const review = this.state;
        this.props.createReview({ review });
        this.setState({body: ""});
    }

    update(field) {
        return (e) => this.setState({
            [field]: e.currentTarget.value
        });
    }

    render() {
        return (
            <div className="review-form-container">
                <form className="review-form-box" onSubmit={this.handleSubmit}>

                    <div className="review-form">

                        <label>
                             <textarea
                                className="review-input"
                                placeholder="Your review here"
                                onChange={this.update('body')}
                                value={this.state.body}
                                />
                        </label>

                        <div className="review-submit-button-container">
                            <button className="review-submit-button" onClick={this.handleSubmit}>
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

