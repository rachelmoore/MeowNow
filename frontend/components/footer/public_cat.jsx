import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';

class PublicCat extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="public-cat-container">

                <div className="public-cat-title">
                    <center>
                        <h2 className="what-is-public-cat">What is a "public cat"?</h2>
                        <p>Sounds creepy...</p>
                    </center>
                </div>

                <div className="public-cat-story">
                    <div className="public-cat-story-text-left">
                        <div className="cat-text">
                            <p>"Public Cats" are simply cats who reside at businesses that are open to the public. In the US, 
                                these businesses tend to be bodegas, liquor stores, gardening or hardware shops, bookstores, and
                                'cat cafes'. MeowNow also lists adoption centers such as the SPCA where people can interact with 
                                cats and kittens up for adoption.
                            </p>
                            <p>Just because a location is listed as being a home to a public cat(s) does not mean that you are 
                               guaranteed to meet a cat at said location. If you are a cat lover you already know that 
                               cats do what they want and roam where they please! The reviews will tell you how likely you are to
                               encounter a cat at a given location and what the cat(s) are like.
                            </p>  
                        </div>
                        <div className="cat-image">
                        </div>
                    </div>
                    <div className="public-cat-story-text-right">
                    </div>
                    <div className="public-cat-story-text-left">
                        <div className="cat-text">
                            <p>Most of the locations listed on MeowNow are small, local businesses. If you wander into one of them 
                               we encourage you to buy something to support the business. In our experience
                               most shop owners who house cats are more than happy to answer questions about their feline residents
                               so ask away! But also make sure to be a respectful customer by purchasing something, no matter how small 
                               the price.
                            </p>
                        </div>
                        <div className="cat-image">
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default withRouter(PublicCat);
