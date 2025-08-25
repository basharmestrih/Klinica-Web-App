export class DrugModel {
  constructor({ id, name, category, price, imgurl }) {
    this.id = id || null;
    this.name = name || "";
    this.category = category || "";
    this.price = price || 0;
    this.imgurl = imgurl || "";
  }

  static fromSupabase(row) {
    return new DrugModel({
      id: row.id,
      name: row.name,
      category: row.category,
      price: row.price,
      imgurl: row.imgurl || "", 
    });
  }

  static fromPlainObject(obj) {
    return new DrugModel(obj);
  }
}
