import Carousel from 'react-bootstrap/Carousel';
import { CardGroup, Card } from 'react-bootstrap';
import '../styles/Slides.css';

const DesData = [
  {
    image:
      './one.jpg',
    title: 'Beach',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image:
      './two.jpg',
    title: 'Forest',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image:
      './three.jpg',
    title: 'Desert Experience',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const Slides = () => (
  <div className="container">
    <div className="row">
      <Carousel>
        <Carousel.Item interval={1500}>

          <CardGroup>
            {DesData.map((data) => (
              <Card key={data.title}>
                <Card.Img variant="top" src={data.image} alt="Card  cap" />
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Text>
                    {data.text}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <div className="d-flex justify-content-center">
                    <i className="fa fa-facebook-official" />
                    <i className="fa fa-twitter" />
                    <i className="fa fa-linkedin-square" />
                  </div>
                </Card.Footer>
              </Card>
            ))}
            ;
          </CardGroup>

        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <CardGroup>
            <Card>
              <Card.Img variant="top" src="./one.jpg" alt="Card  cap" />
              <Card.Body>
                <Card.Title>Desert Experience</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <div className="d-flex justify-content-center">
                  <i className="fa fa-facebook-official" />
                  <i className="fa fa-twitter" />
                  <i className="fa fa-linkedin-square" />
                </div>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="./two.jpg" alt="TWO" />
              <Card.Body>
                <Card.Title>Beach</Card.Title>
                <Card.Text>
                  In vulputate nulla sed dolor ultrices, a tincidunt lacus tincidunt.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <div className="d-flex justify-content-center">
                  <i className="fa fa-facebook-official" />
                  <i className="fa fa-twitter" />
                  <i className="fa fa-linkedin-square" />
                </div>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="./three.jpg" alt="Three" />
              <Card.Body>
                <Card.Title>Forest</Card.Title>
                <Card.Text>
                  In vulputate nulla sed dolor ultrices, a tincidunt lacus tincidunt.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <div className="d-flex justify-content-center">
                  <i className="fa fa-facebook-official" />
                  <i className="fa fa-twitter" />
                  <i className="fa fa-linkedin-square" />
                </div>
              </Card.Footer>
            </Card>
          </CardGroup>
        </Carousel.Item>
      </Carousel>
    </div>
  </div>
);

export default Slides;
