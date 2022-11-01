const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const {
  allSaldo,
  tambahSalado,
  historytambahSalado,
  sell,
  riwayat,
  kurangSaldo,
} = require("../controllers");
router.post("/topup", historytambahSalado);
router.put("/topUp", tambahSalado);
router.put("/delsaldo", kurangSaldo);
router.get("/allSaldo", allSaldo);
router.get("/history", riwayat);
router.post("/sell", sell);

module.exports = router;
