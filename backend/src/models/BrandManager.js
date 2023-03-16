const AbstractManager = require("./AbstractManager");

class BrandManager extends AbstractManager {
  constructor() {
    super({ table: "brand" });
  }
findByBrand(brand) {
    return this.database.query(`select * from  ${this.table} where id = ?`, [
      brand.id, brand.brand,
    ]);
  }

}
  module.exports = BrandManager;