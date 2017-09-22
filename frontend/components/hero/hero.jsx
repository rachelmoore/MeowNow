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
            <img src="https://i.imgur.com/dPJ7A0L.png" height="65px" />
          </div>
          <div className="tagline-text">
            <h5>Find <span className="yellow-span">public cats</span> near you!</h5>
          </div>
          <div className="search">
            <p>Search here</p>
          </div>
        </div>

        <div className="cat-banner">
          <img src="http://hellahoops.com/CatBanner.jpg" width="600px;" />
        </div>

      </div>
    )
  }
}

export default Hero;
