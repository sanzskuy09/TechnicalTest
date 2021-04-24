import { useMutation } from "react-query";
import { API } from "../Config/API";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

import { Form, Button, Col } from "react-bootstrap";

import swal from "sweetalert";

import ImageHero2 from "../Assets/Images/img-hero2.svg";

const AddEvent = () => {
  const history = useHistory();
  const [errMessage, setErrMessage] = useState("");
  const [form, setForm] = useState({
    title: "",
    location: "",
    participant: "",
    date: "",
    note: "",
    image: null,
  });
  const { title, location, participant, date, note, image } = form;

  const onChange = (e) => {
    const tempForm = { ...form };
    tempForm[e.target.name] =
      e.target.type === "file" ? e.target.files[0] : e.target.value;
    setForm(tempForm);
  };

  const handleEvent = useMutation(async () => {
    const body = new FormData();

    body.append("title", title);
    body.append("location", location);
    body.append("participant", participant);
    body.append("date", date);
    body.append("note", note);
    body.append("image", image);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      const res = await API.post("/add-event", body, config);
      setForm({
        title: "",
        location: "",
        participant: "",
        date: "",
        note: "",
        image: null,
      });

      swal("Yeay, New Event Successfully Added", {
        icon: "success",
      });

      history.push("/");
    } catch (error) {
      console.log(error?.response?.data);
      setErrMessage(error?.response?.data?.message);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(handleEvent?.error);
    handleEvent.mutate();
  };

  return (
    <>
      <div className="add-event">
        <div className="wrapper d-flex align-items-center justify-content-between">
          <div className="form-wrapper mx-2">
            <Form
              style={{ padding: "10px", position: "static" }}
              className="d-flex flex-column"
              onSubmit={handleSubmit}
            >
              <h3 className="mb-3">+ Add Event</h3>

              {errMessage !== "" && (
                <div class="alert alert-danger" role="alert">
                  {errMessage}
                </div>
              )}

              <Form.Row className="mb-2 form-row">
                <Form.Group as={Col}>
                  <Form.Control
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={title}
                    onChange={(e) => onChange(e)}
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Control
                    type="text"
                    placeholder="Location"
                    name="location"
                    value={location}
                    onChange={(e) => onChange(e)}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row className="mb-2 form-row">
                <Form.Group as={Col}>
                  <Form.Control
                    type="text"
                    placeholder="Participant"
                    name="participant"
                    value={participant}
                    onChange={(e) => onChange(e)}
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Control
                    type="date"
                    name="date"
                    value={date}
                    onChange={(e) => onChange(e)}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Group className="mb-2">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Note : "
                  name="note"
                  value={note}
                  onChange={(e) => onChange(e)}
                />
              </Form.Group>
              <Form.Group className="mb-4 mt-2">
                <input
                  type="file"
                  id="file"
                  className="col-md-2"
                  name="image"
                  onChange={(e) => onChange(e)}
                />
                <label for="file">Upload Picture</label>
              </Form.Group>
              <Form.Group className="mr-4 d-flex justify-content-end btn-group">
                <Button
                  variant="transparant"
                  type="submit"
                  className="btn btn-add-event"
                  disabled={
                    !title ||
                    !location ||
                    !participant ||
                    !date ||
                    !note ||
                    image == null
                      ? true
                      : false
                  }
                >
                  Add Event
                </Button>
              </Form.Group>
            </Form>
          </div>
          <div className="img-wrapper">
            <img src={ImageHero2} alt="Image hero" className="img-hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddEvent;

// Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cum voluptatum adipisci temporibus consequuntur blanditiis consectetur laboriosam inventore dicta fugit!
