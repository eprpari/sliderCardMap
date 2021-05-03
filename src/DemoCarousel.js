import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1xv4uqSqoOqkGTtrqNPw2MqYalaRS4hEzDLxSEVky-qw_KE2BuQA1XxssaaYwr_6UCTk&usqp=CAU" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://i.ytimg.com/vi/a0CEtq6BN9U/maxresdefault.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://i.ytimg.com/vi/a0CEtq6BN9U/maxresdefault.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
    
}export default  DemoCarousel



;



// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>