const Table = (props) => {
  return (
    <tr>
      <td>{props.tgl}</td>
      <td>{props.provider}</td>
      <td>{props.nominal}</td>
      <td>{props.nomor}</td>
      <td>{props.sawal}</td>
      <td>{props.sakhir}</td>
    </tr>
  );
};
export default Table;
