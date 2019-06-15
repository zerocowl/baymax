module.exports = {
  name: 'bronquios',

  actions: {
    proccess: {
      async handler(ctx) {
        try {
          await ctx.call('gas.save', ctx.params);
        } catch (error) {
          this.logger.error(error);
          throw error;
        }
      }
    }
  },

  methods: {}
};
