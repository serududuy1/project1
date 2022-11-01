import React, { useState, useEffect } from "react";
import "../Assets/css/History.css";
import Table from "./Table";
const History = () => {
  const [hdata, setHdata] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8005/v1/history")
      .then((res) => res.json())
      .then((res) => setHdata(res.data));
  }, [setHdata]);
  console.log(hdata);
  return (
    <div className="container-history">
      <table>
        <thead>
          <tr>
            <th>tanggal</th>
            <th>provider</th>
            <th>nominal</th>
            <th>nomor</th>
            <th>saldo awal</th>
            <th>saldo akhir</th>
          </tr>
        </thead>
        <tbody>
          {hdata.map((data, i) => (
            <Table
              key={i}
              tgl={data.tgl}
              nominal={data.nominal}
              provider={data.provider}
              nomor={data.nomerhp}
              sawal={data.saldoawal}
              sakhir={data.saldoakhir}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;
