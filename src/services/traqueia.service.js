import chunk from 'lodash/chunk';
module.exports = {
  name: 'traqueia',

  actions: {
    transport: {
      async handler(ctx) {
        const { ar } = ctx.params;
        try {
          const chuckAr = chunk(ar, 2);
          const results = chuckAr.map(async el => {
            const gasCarbono = await ctx.call('bronquios.transport', {
              pckAir: el
            });
            return gasCarbono;
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
