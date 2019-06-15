const Service = {
  name: 'gas',

  actions: {
    create(ctx) {
      const db = this.db;
      return db.Gas.create(ctx.params);
    },

    findByType(ctx) {
      const db = this.db;
      return db.Gas.findOne({ where: { type: ctx.params.type } });
    },

    list() {
      const db = this.db;
      return db.Gas.findAndCountAll();
    }
  },
  started() {
    this.db = require('../repository');
  }
};

module.exports = Service;
