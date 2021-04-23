import { Form, Button, Card, Col, Row, Table } from "react-bootstrap";
const Dashboard = () => {
  return (
    <div className="container dashboard">
      <Table responsive="sm" bordered>
        <thead>
          <tr>
            <th style={{ width: "3vw" }}>No.</th>
            <th>Title</th>
            <th style={{ width: "12vw" }}>Location</th>
            <th style={{ width: "10vw" }}>Date</th>
            <th>Participant</th>
            <th style={{ width: "25vw" }}>Note</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Meeting with CEO</td>
            <td>Location, jakarta</td>
            <td>17 April 2021</td>
            <td>Mrs. Ihsan</td>
            <td className="overflow-auto note-table">
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Omnis repellat laborum maiores
              praesentium quae asperiores deserunt nemo ratione numquam
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Dashboard;
