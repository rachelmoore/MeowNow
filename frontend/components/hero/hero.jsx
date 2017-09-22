import React from 'react';

class Hero extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="hero-container">

        <div className="text-search-container">
          <div className="logo-text">
            <h2>MeowNow</h2>
          </div>
          <div className="tagline-text">
            <h6>Find public cats near you!</h6>
          </div>
          <div className="search">
            <p>Search here</p>
          </div>
        </div>

        <div className="cat-banner">
          <img src="http://hellahoops.com/CatBanner.jpg" width="700px" />
        </div>

      </div>
    )
  }
}

export default Hero;
