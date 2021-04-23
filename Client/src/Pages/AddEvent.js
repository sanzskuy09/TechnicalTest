import ImageHero from "../Assets/Images/img-hero.jpg";

import { Form, Button, Col } from "react-bootstrap";

const AddEvent = () => {
  return (
    <div className="add-event">
      <div className="wrapper d-flex align-items-center justify-content-between">
        <div className="form-wrapper mx-2">
          <Form style={{ position: "static" }}>
            <h3>+ Add Event</h3>
            <Form.Row className="my-3">
              <Form.Group as={Col}>
                <Form.Control type="text" placeholder="Enter Title" />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Control type="text" placeholder="Location" />
              </Form.Group>
            </Form.Row>
            <Form.Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Control type="text" placeholder="Enter Participant" />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Control type="date" />
              </Form.Group>
            </Form.Row>

            <Form.Group className="mb-3">
              <Form.Control as="textarea" rows={3} placeholder="Note : " />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.File label="Pilih Gambar" />
            </Form.Group>

            <Button variant="primary" type="submit" className="ml-auto">
              Tambah Event
            </Button>
          </Form>
        </div>
        <div className="img-wrapper">
          <img src={ImageHero} alt="Image hero" className="img-hero" />
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
