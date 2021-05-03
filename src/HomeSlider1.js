import React, {Component}from'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
// import pic1 from './images/pic1.jpg'
// import pic2 from './images/pic2.jpg'
// import pic3 from './images/pic3.jpg'




class AddSlider extends React.Component{
    render(){
        return(
            <div>
<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://c4.wallpaperflare.com/wallpaper/211/281/126/history-monochrome-building-workers-wallpaper-preview.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://i.pinimg.com/originals/36/a2/d2/36a2d2c7ceed0ae102d191445e45a6b3.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.99images.com/photos/wallpapers/hd-wallpapers/hd-wallpapers%20android-iphone-desktop-hd-backgrounds-wallpapers-1080p-4k-2ykib.jpg?v=1616120830"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

            </div>
            
            )}}
            export default AddSlider;