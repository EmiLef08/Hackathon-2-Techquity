






  const AbstractManager = require("./AbstractManager");

class PhoneManager extends AbstractManager {
  constructor() {
    super({ table: "phone" });
  }
  update(phone) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [phone.id, phone.brand]
    );
  }
  
  find(id) {
    return this.database.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }


  
}

module.exports = PhoneManager;