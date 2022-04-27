import { Carousel } from 'react-bootstrap';
import UNCC1 from '../images/unccprod1.jpg';
import UNCC2 from '../images/unccprod2.jpg';
import UNCC3 from '../images/unccprod3.jpg';

const Slideshow = () => {
    return (
        <div className="slideshow">
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={UNCC1}
                alt="First slide"
                width="100"
                height="600"
                />
                <Carousel.Caption>
                <h3></h3>
                <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={UNCC3}
                alt="Second slide"
                width="100"
                height="600"
                />

                <Carousel.Caption>
                <h3></h3>
                <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={UNCC2}
                alt="Third slide"
                width="100"
                height="600"
                />

                <Carousel.Caption>
                <h3></h3>
                <p></p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
};

export default Slideshow;