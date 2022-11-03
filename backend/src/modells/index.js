const db = require("./db_config");

module.exports = {
  querySQL(sql, tes, msg) {
    db.query(sql, (err, respon) => {
      if (err) throw err;
      tes.status(200).json({
        message: "ok!" + msg,
        data: respon,
      });
    });
  },
};
