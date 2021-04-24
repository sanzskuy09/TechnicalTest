import { useQuery } from "react-query";
import { API } from "../Config/API";

import CardEvent from "../Components/CardEvent";

import { Row, Spinner } from "react-bootstrap";

const LandingPage = () => {
  const { data: dataEvent, isLoading, isError } = useQuery(
    "eventCache",
    async () => {
      const response = await API.get("/events");
      return response.data.data.events;
    }
  );

  return (
    <div className="container-fluid" style={{ width: "80%" }}>
      <Row className="d-flex justify-content-around">
        {isLoading ? (
          <Spinner animation="border" variant="secondary" />
        ) : (
          <>
            {dataEvent?.map((data) => (
              <CardEvent data={data} key={data.id} />
            ))}
          </>
        )}
      </Row>
    </div>
  );
};

export default LandingPage;
