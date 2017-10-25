import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';

class PublicCat extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="hero-container">

                <div className="text-search-container">
                    <div className="logo-text">
                        <h2>MeowNow</h2>
                        <img src="http://hellahoops.com/catdoodletransparent.png" height="70px" className="hero-logo-img" />
                    </div>
                    <div className="tagline-text">
                        <h5>Find <span className="yellow-span">public catsssssssomg</span> near you!</h5>
                    </div>
                </div>

                <div className="cat-banner">
                    <img src="http://hellahoops.com/CatBanner.jpg" width="800px;" />
                </div>

            </div>
        )
    }
}

export default withRouter(PublicCat);
