const AbstractManager = require("./AbstractManager");

class BrandManager extends AbstractManager {
  constructor() {
    super({ table: "brand" });
  }

  findByModel(model) {
    return this.database.query(`select * from  ${this.table} where id = ?`, [
      model.id
    ]);
  }

  


}
  module.exports = BrandManager;