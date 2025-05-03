const { Logger } = require("../config");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    const res = await this.model.create(data);
    return res;
  }
  
  async destroy(data) {
    const res = await this.model.destroy({
      where: {
        id: data,
      },
    });
    return res;
  }

  async get(data) {
    const res = await this.model.findByPk(data);
    return res;
  }

  async getAll() {
    const res = await this.model.findAll();
    return res;
  }

  async update(data, id) {
    const res = await this.model.update(data, {
      where: {
        id: id,
      },
    });
    return res;
  }
}

module.exports = CrudRepository;
