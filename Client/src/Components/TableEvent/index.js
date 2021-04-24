const TableEvent = ({ data, index }) => {
  const { title, location, participant, date, note } = data;

  let d = new Date(date);
  const fullMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const fullDate = `${d.getDate()} ${
    fullMonth[d.getMonth()]
  } ${d.getFullYear()}`;

  return (
    <>
      <tr className="table-event">
        <td>{index + 1}</td>
        <td>{title}</td>
        <td>{location}</td>
        <td>{fullDate}</td>
        <td>{participant}</td>
        <td className="overflow-auto note-table">{note}</td>
      </tr>
    </>
  );
};

export default TableEvent;
