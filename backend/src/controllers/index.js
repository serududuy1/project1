const { validationResult } = require("express-validator");
const fs = require("fs");
const path = require("path");

const { querySQL } = require("../modells");
module.exports = {
  allSaldo(req, res) {
    const sql = `select * from harta`;
    querySQL(sql, res);
  },
  riwayat(req, res) {
    const sql = `select * from riwayat`;
    querySQL(sql, res);
  },
  sell(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const err = new Error("inputan harus diatas 5");
      err.errorStatus = 401;
      err.data = errors.array();
      throw err;
    }
    var data = {
      tgl: req.body.tgl,
      provider: req.body.provider,
      nominal: req.body.nominal,
      nomer: req.body.nomer,
      saldoawal: req.body.saldoawal,
    };
    var ss = parseInt(data.saldoawal) - parseInt(data.nominal);
    if (ss < 0) {
      const err = new Error("SALDO KURANG");
      err.errorStatus = 401;
      err.data = errors.array();
      throw err;
    } else {
      const sql = `INSERT INTO riwayat( tgl, nominal, provider, nomerhp, saldoawal, saldoakhir)VALUES ('${data.tgl}','${data.nominal}','${data.provider}','${data.nomer}','${data.saldoawal}','${ss}')`;
      querySQL(sql, res);
    }
  },
  tambahSalado(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const err = new Error("inputan harus diatas 5");
      err.errorStatus = 401;
      err.data = errors.array();
      throw err;
    }
    var data = {
      nominal: req.body.nominal,
      tgl: req.body.tgl,
      saldoawal: req.body.saldoawal,
    };
    var ss = parseInt(data.saldoawal) + parseInt(data.nominal);
    console.log("data cukup");
    const sql = `update harta set saldo='${ss}' where id='1'`;
    querySQL({ sql }, res);
    console.log(ss);
  },
  kurangSaldo(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const err = new Error("inputan harus diatas 5");
      err.errorStatus = 401;
      err.data = errors.array();
      throw err;
    }
    var data = {
      tgl: req.body.tgl,
      provider: req.body.provider,
      nominal: req.body.nominal,
      nomer: req.body.nomer,
      saldoawal: req.body.saldoawal,
    };
    var ss = parseInt(data.saldoawal) - parseInt(data.nominal);
    if (ss < 0) {
      const err = new Error("SALDO KURANG!");
      err.errorStatus = 401;
      err.data = errors.array();
      throw err;
    } else {
      console.log("data cukup");
      const sql = `update harta set saldo='${ss}' where id='1'`;
      querySQL({ sql }, res);
      console.log(ss);
    }
  },
  historytambahSalado(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const err = new Error("inputan harus diatas 5");
      err.errorStatus = 401;
      err.data = errors.array();
      throw err;
    }
    var data = {
      nominal: req.body.nominal,
      tgl: req.body.tgl,
      saldoawal: req.body.saldoawal,
    };
    var ss = parseInt(data.saldoawal) + parseInt(data.nominal);
    console.log("data cukup");
    console.log(data);
    // const sqls = `update harta set saldo='${ss}' where id='1'`;
    const sql = `INSERT INTO riwayat( tgl, nominal, provider, nomerhp, saldoawal, saldoakhir)VALUES
     ('${data.tgl}','${data.nominal}','TOPUP','TOPUP','${data.saldoawal}','${ss}')`;
    querySQL(sql, res);
    // console.log(ss);
  },
};
