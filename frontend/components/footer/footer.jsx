import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer-container">
                <div className="footer-links">
                    <div className="footer-link-item"><a href="rachelmoore.net">What's a "Public Cat"?</a></div>
                    <div className="footer-link-item"><a href="rachelmoore.net">About MeowNow</a></div>
                    <div className="footer-link-item"><a href="rachelmoore.net">Submit New Location</a></div>
                </div>
            </div>
        );
    }
}

export default withRouter(Footer);
