import { Carousel } from 'react-bootstrap';
import Test from '../images/UNCC Logo.png';
import mine from '../images/mine.jpg';
import patrick from '../images/The Inner Machinations.jpg';

const Slideshow = () => {
    return (
        <div className="slideshow">
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Test}
                alt="First slide"
                width="100"
                height="600"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={patrick}
                alt="Second slide"
                width="100"
                height="600"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={mine}
                alt="Third slide"
                width="100"
                height="600"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
};

export default Slideshow;