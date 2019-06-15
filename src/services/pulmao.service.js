module.exports = {
  name: 'bronquios',

  actions: {
    proccess: {
      async handler(ctx) {
        try {
          const results = pckAir.map(async el => {
            await ctx.call('gas.save', ctx.params);           
          });
          return Promise.all(results);
        } catch (error) {
          this.logger.error(err);
          throw err;
        }
      }
    }
  },

  methods: {}
};
