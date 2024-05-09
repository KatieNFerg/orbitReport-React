import './styling.css';

const Table = ({ sat }) => {
  const satData = sat.map((data) => {
    const status = data.operational ? "active" : "inactive";
    return (
      <tr key={data.id}>
        <td>{data.name}</td>
        <td>{data.type}</td>
        <td>{data.launchDate}</td>
        <td>{status}</td>
      </tr>
    );
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>{satData}</tbody>
    </table>
  );
};
export default Table;
