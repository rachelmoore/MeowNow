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
                    <div className="footer-link-item"><Link to={`/publiccat`}>"Public Cat"? &#x1F914;</Link></div>
                    <div className="footer-link-item"><Link to={`/about`}>About</Link></div>
                </div>
            </div>
        );
    }
}

export default withRouter(Footer);
