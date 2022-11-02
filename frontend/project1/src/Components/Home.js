import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "../Assets/css/Home.css";
const Home = (props) => {
  const [jtgl, setJtgl] = useState("");
  const [jnominal, setJnominal] = useState("");
  const [jprovider, setJprovider] = useState("");
  const [jnomor, setJnomor] = useState("");

  const [tp, setTp] = useState(true);
  const [ttgl, setTtgl] = useState("");
  const [tnominal, setTnominal] = useState("");

  const simpanTopup = (e) => {
    e.preventDefault();
    let formDatas = new FormData();
    formDatas.append("tgl", ttgl);
    formDatas.append("nominal", tnominal);
    formDatas.append("saldoawal", props.saldo.saldo);
    console.log(formDatas);
    fetch("http://localhost:8005/v1/topup", {
      method: "POST",
      body: formDatas,
    }).then((res) => res.json());
    fetch("http://localhost:8005/v1/topUp", {
      method: "PUT",
      body: formDatas,
    })
      .then((res) => res.json())
      .then((res) =>
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "TOP UP BERHASIL!",
          showConfirmButton: false,
          timer: 4000,
        })
      );
  };

  const sellData = (e) => {
    console.log("input sell nih bosss");
    e.preventDefault();
    let formDatas = new FormData();
    formDatas.append("tgl", jtgl);
    formDatas.append("nominal", jnominal);
    formDatas.append("provider", jprovider);
    formDatas.append("nomer", jnomor);
    formDatas.append("saldoawal", props.saldo.saldo);
    console.log(formDatas);
    console.log(jnominal);
    fetch("http://localhost:8005/v1/sell", {
      method: "POST",
      body: formDatas,
    }).then((res) => res.json());
    fetch("http://localhost:8005/v1/delsaldo", {
      method: "PUT",
      body: formDatas,
    })
      .then((res) => res.json())
      .then((res) =>
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "PULSA TERKIRIM",
          showConfirmButton: false,
          timer: 4000,
        })
      );
  };
  const klikJual = () => {
    setTp(true);
  };
  const klikTopUp = () => {
    setTp(false);
  };

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  return (
    <>
      <div className="bar-top">
        <h1>SISA SALDO {rupiah(props.saldo.saldo)}</h1>

        <button onClick={klikJual} className="btn m-3">
          top up
        </button>
        <button onClick={klikTopUp} className="btn">
          Jual
        </button>
      </div>

      {tp ? (
        <div className="container">
          <div id="topup">
            <h1>topup</h1>
            <div className="form">
              <form onSubmit={simpanTopup}>
                <div className="kiri">
                  <label>Tanggal</label>
                  <input
                    required
                    className="inputan"
                    type="date"
                    onChange={(e) => setTtgl(e.target.value)}
                  />
                </div>
                <div className="kiri">
                  <label>Nominal</label>

                  <input
                    required
                    className="inputan"
                    type="text"
                    // value={rupiah()}
                    onChange={(e) => setTnominal(e.target.value)}
                  />
                </div>
                <button type="submit">Simpan</button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div id="sell">
            <h1>sell</h1>
            <div className="form">
              <form onSubmit={sellData}>
                <div className="kiri">
                  <label>Tanggal</label>
                  <input
                    required
                    className="inputan"
                    type="date"
                    placeholder="masukkan tanggal"
                    onChange={(e) => setJtgl(e.target.value)}
                  />
                </div>
                <div className="kiri">
                  <label>Provider</label>
                  <select
                    type="text"
                    className="inputan"
                    onChange={(e) => setJprovider(e.target.value)}
                  >
                    <option>SILAHKAH PILIH PROVIDER</option>
                    <option value="telkomsel">TELKOMSEL</option>
                    <option value="xl">XL</option>
                    <option value="indosat">INDOSAT</option>
                    <option value="three">3</option>
                  </select>
                  {/* <input
                    required
                    className="inputan"
                    type="text"
                    placeholder="masukkan provider"
                    onChange={(e) => setJprovider(e.target.value)}
                  /> */}
                </div>
                <div className="kiri">
                  <label>Nominal</label>
                  <select
                    type="text"
                    className="inputan"
                    onChange={(e) => setJnominal(e.target.value)}
                  >
                    <option>SILAHKAH PILIH NOMINAL</option>
                    <option value="100000">100.000</option>
                    <option value="50000">50.000</option>
                    <option value="20000">20.000</option>
                    <option value="10000">10.000</option>
                  </select>
                  {/* <input
                    required
                    type="text"
                    onChange={(e) => setJnominal(e.target.value)}
                  /> */}
                </div>
                <div className="kiri">
                  <label>No Hp</label>
                  <input
                    required
                    className="inputan"
                    type="number"
                    minLength={10}
                    placeholder="masukkan nomor hp"
                    onChange={(e) => setJnomor(e.target.value)}
                  />
                </div>
                <button type="submit">Simpan</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
