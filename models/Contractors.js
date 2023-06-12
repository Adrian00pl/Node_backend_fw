const db = require("../config/db");

class Contractors {
  constructor(lp,imie_nazwisko,data_od,data_do,miejsce_wyjazdu,miejsce_przyjazdu) {
    this.lp = lp;
    this.imie_nazwisko = imie_nazwisko;
    this.data_od = data_od;
    this.data_do = data_do;
    this.miejsce_wyjazdu = miejsce_wyjazdu;
    this.miejsce_przyjazdu = miejsce_przyjazdu;

  }

  static getAll() {
    let sql = "SELECT * FROM contractors;";

    return db.execute(sql);
  }

  static create(data) {
    let sql = "INSERT INTO contractors (NIP, REGON, NAZWA, CZY_PLATNIK_VAT, ULICA, NUMER_DOMU, NUMER_MIESZKANIA) VALUES (?, ?, ?, ?, ?, ?, ?)";
    let values = [data.NIP, data.REGON, data.NAZWA, data.CZY_PLATNIK_VAT, data.ULICA, data.NUMER_DOMU, data.NUMER_MIESZKANIA];
    return db.execute(sql, values);
  }

  static update(id, data) {
    let sql = "UPDATE contractors SET NIP = ?, REGON = ?, NAZWA = ?, CZY_PLATNIK_VAT = ?, ULICA = ?, NUMER_DOMU = ?, NUMER_MIESZKANIA = ? WHERE lp = ?";
    let values = [data.NIP, data.REGON, data.NAZWA, data.CZY_PLATNIK_VAT, data.ULICA, data.NUMER_DOMU, data.NUMER_MIESZKANIA, id];
    return db.execute(sql, values);
  }

  static delete(id) {
    let sql = `DELETE FROM contractors WHERE lp = ${id}`;
    return db.execute(sql);
  }
}

module.exports = Contractors;