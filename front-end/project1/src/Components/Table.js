const Table = (props) => {
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };
  return (
    <tr>
      <td>{props.tgl}</td>
      <td>{props.provider}</td>
      <td>{rupiah(props.nominal)}</td>
      <td>{props.nomor}</td>
      <td>{rupiah(props.sawal)}</td>
      <td>{rupiah(props.sakhir)}</td>
    </tr>
  );
};
export default Table;
