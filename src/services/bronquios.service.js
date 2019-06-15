module.exports = {
  name: 'bronquios',

  actions: {
    transport: {
      async handler(ctx) {
        const { pckAir } = ctx.params;
        try {
          const results = pckAir.map(async el => {
            if (el === 'oxigenio') {
              const res = await ctx.call('pulmao.proccess', {
                type: el,
                milliliters: 100 + Math.floor(Math.random() * 10000)
              });
              return res;
            }
            return el;
          });
          return Promise.all(results);
        } catch (error) {
          this.logger.error(error);
          throw error;
        }
      }
    }
  },

  methods: {}
};
