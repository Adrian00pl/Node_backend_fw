const db = require("../config/db");

class Delegations {
  constructor(lp,imie_nazwisko,data_od,data_do,miejsce_wyjazdu,miejsce_przyjazdu) {
    this.lp = lp;
    this.imie_nazwisko = imie_nazwisko;
    this.data_od = data_od;
    this.data_do = data_do;
    this.miejsce_wyjazdu = miejsce_wyjazdu;
    this.miejsce_przyjazdu = miejsce_przyjazdu;

  }

  static getAll() {
    let sql = "SELECT * FROM delegations;";

    return db.execute(sql);
  }

}

module.exports = Delegations;