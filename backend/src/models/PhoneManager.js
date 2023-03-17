const AbstractManager = require("./AbstractManager");

class PhoneManager extends AbstractManager {
  constructor() {
    super({ table: "phone" });
  }
  // read(phone) {
  //   return this.database.query(
  //     `select * from ${this.table} where id = ?`,
  //     [phone.id, brand.id]
  //   );
  // }
  
  getAllPhone(phone) {
    return this.database.query(
      `select * from ${this.table} INNER JOIN brand ON phone.brand_id = brand.id
      INNER JOIN model ON phone.model_id = model.id`,
      
      [phone.brand,phone.model_name,phone.os,phone.ram,phone.memory,phone.screen_size,phone.network,phone.image,phone.category]
    )
    .then(([result]) => {
      console.log(result); 
      return result;
    });
  }
  
}

module.exports = PhoneManager;