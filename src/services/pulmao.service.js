module.exports = {
  name: 'pulmao',

  actions: {
    proccess: {
      async handler(ctx) {
        try {
          await ctx.call('proccess.create', ctx.params);
          return 'success';
        } catch (error) {
          this.logger.error(error);
          throw error;
        }
      }
    }
  },

  methods: {}
};
