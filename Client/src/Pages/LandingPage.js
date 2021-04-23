import ImageCard from "../Assets/Images/img-card.svg";
import Marker from "../Assets/Images/marker.png";
import Participant from "../Assets/Images/participant.png";

import { Card, Col, Row } from "react-bootstrap";

const LandingPage = () => {
  return (
    <div className="container-fluid" style={{ width: "80%" }}>
      <Row className="d-flex justify-content-around">
        <div className="landing-page">
          <Col className="mb-4 mr-auto">
            <Card className="card-wrapper">
              <Card.Img variant="top" src={ImageCard} className="img-card" />
              <Card.Header>
                <Card.Subtitle className="mb-2 text-muted d-flex align-items-center mt-1">
                  <img
                    src={Marker}
                    alt="Image Card"
                    style={{ width: "18px", marginRight: "5px" }}
                  />
                  Location
                </Card.Subtitle>
                <Card.Title>Meeting with CEO</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  17 April 2021
                </Card.Subtitle>
              </Card.Header>
              <Card.Body>
                <Row md={2} className="d-flex">
                  <Col className="mb-1">
                    <div
                      className="d-flex align-items-center"
                      style={{ fontSize: "14px" }}
                    >
                      <img
                        src={Participant}
                        alt="image profile"
                        style={{ width: "24px", marginRight: "2px" }}
                      />
                      Mrs. Ihsan
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer className="text-muted overflow-auto mt-2">
                Note: <br /> Some quick example text to build on the card title
                and make up the bulk of the card's content. Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Omnis repellat laborum
                maiores praesentium quae asperiores deserunt nemo ratione
                numquam consectetur et tenetur a, nihil deleniti, accusantium
                corrupti, quod ipsum quas. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Accusantium aspernatur dolor
                pariatur dolore explicabo, provident vero minima ipsam maiores
                vitae.
              </Card.Footer>
            </Card>
          </Col>
        </div>
      </Row>
    </div>
  );
};

export default LandingPage;
