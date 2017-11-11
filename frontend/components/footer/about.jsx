import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <center >
                <div className="public-cat-container">

                    <div className="public-cat-story">
                        <div className="cat-1">
                            <p className="public-cat-paragraph">One evening in the summer of 2016 I was feeling lonely as I walked back to my apartment. 
                                Suddenly, a cat appeared at the end of the block. A strange sight in my new neighborhood!
                            </p> 
                            <p className="public-cat-paragraph">
                            The cat charged toward me and leapt into my arms. The lonely day suddenly seemed like a miracle. I checked the cat’s 
                            collar to make sure it was not lost or in trouble. Instead of a phone number the collar was engraved with a short message not to worry 
                            about the cat and a Twitter account URL. Even stranger. I pulled out my phone and navigated to the page. 
                            </p>
                        </div>
                        <div className="cat-2">
                            <img src="http://res.cloudinary.com/df9oqycdp/image/upload/v1510193791/catfillmore_zjt3x3.jpg" height="600px" />
                        </div>
                    </div>
                    <div className="public-cat-story">
                        <div className="cat-3">
                            <img src="http://res.cloudinary.com/df9oqycdp/image/upload/v1510194692/catgirl_nrj5i1.png" height="400px" />
                        </div>
                        <div className="cat-4">
                            <p className="public-cat-paragraph">This cat is <a href="https://twitter.com/catfillmore">@CatFillmore</a>, a famous and friendly neighborhood character. His “real” name is Marlowe, 
                                and he is the initial inspiration for this project. While I am not able to track Marlowe’s exploits all over my neighborhood so that people 
                                might benefit from his presence, I realized that I *could* make a platform where people can find “public cats” to interact with if they are ever 
                                feeling sad or in need of animal interaction in the city. 
                            </p>
                        </div>
                    </div>
                    <div className="public-cat-story">
                        <div className="cat-5">
                            <p className="public-cat-paragraph">The popularity of social media accounts like Bodega Cats of Instagram shows that I am not alone in my appreciation of “public cats”. 
                                I hope that my fellow city-dwelling animal lovers who may not be able to have pets due to high rents and frequent relocation can use MeowNow as a resource to find cat friends and support local businesses. 
                            </p>
                        </div>
                        <div className="cat-6">
                            <img src="http://res.cloudinary.com/df9oqycdp/image/upload/v1510194691/catsecurity_oresyf.png" height="600px" />
                        </div>
                    </div>

                </div>
            </center>
        );
    }
}

export default withRouter(About);
