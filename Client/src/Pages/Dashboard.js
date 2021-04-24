import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { API } from "../Config/API";

import ReactPaginate from "react-paginate";

import TableEvent from "../Components/TableEvent";

import { Table, Spinner, Form, FormControl, Button } from "react-bootstrap";

const Dashboard = () => {
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [dataFilter, setDataFilter] = useState([]);
  const [perPage] = useState(5);
  const [pageCount, setPageCount] = useState(0);

  const [search, setSearch] = useState("");

  const { data: dataEvent, isLoading, isError, refetch } = useQuery(
    "eventCache",
    async () => {
      const response = await API.get("/events");
      const data = response.data.data.events;

      const slice = data.slice(offset, offset + perPage);
      const postData = slice.map((data, index) => (
        <TableEvent data={data} key={data.id} index={index} />
      ));

      setDataFilter(postData);
      setPageCount(Math.ceil(data.length / perPage));
      setData(data);
      return data;
    }
  );

  const getData = () => {
    const res = dataEvent;
    return res;
  };

  useEffect(() => {
    getData();
    refetch();
  }, [offset]);

  useEffect(() => {
    if (search === "") {
      refetch();
    }

    const eventFilter = data?.filter((e) => {
      return (
        e?.title?.includes(search) ||
        e?.location?.includes(search) ||
        e?.date?.includes(search) ||
        e?.participant?.includes(search) ||
        e?.note?.includes(search)
      );
    });

    setData(eventFilter);
  }, [search]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    {
      selectedPage == 0 && setOffset(0);
    }
    {
      selectedPage !== 0 && setOffset(selectedPage + 4 * selectedPage);
    }
  };

  return (
    <div className="container dashboard">
      <Form inline className="mb-3">
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2 input-style"
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* <Button variant="outline-warning" className="btn-style">
          Search
        </Button> */}
      </Form>
      <Table responsive="sm" bordered>
        <thead>
          <tr>
            <th style={{ width: "3vw" }}>No.</th>
            <th style={{ width: "10vw" }}>Title</th>
            <th style={{ width: "10vw" }}>Location</th>
            <th style={{ width: "10vw" }}>Date</th>
            <th style={{ width: "12vw" }}>Participant</th>
            <th style={{ width: "25vw" }}>Note</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan="6" className="d-flex justify-content-center">
                <Spinner animation="border" variant="secondary" />
              </td>
            </tr>
          ) : (
            <>
              {search == "" || search == null ? (
                <>{dataFilter}</>
              ) : (
                <>
                  {data?.map((data, index) => (
                    <TableEvent data={data} key={data.id} index={index} />
                  ))}
                </>
              )}
            </>
          )}
        </tbody>
      </Table>
      <div className="pagination-wrapper d-flex">
        {search == "" || search == null ? (
          <>
            {dataFilter?.length <= 6 && (
              <ReactPaginate
                previousLabel={"Prev"}
                nextLabel={"Next"}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={3}
                pageRangeDisplayed={4}
                onPageChange={handlePageClick}
                breakClassName={"break-me"}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
              />
            )}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
