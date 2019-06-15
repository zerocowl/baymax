module.exports = {
  name: 'faringe',

  actions: {
    transport: {
      async handler(ctx) {
        const { ar } = ctx.params;
        try {
          if (isAir(ar)) {
            const gases = await ctx.call('laringe.transport', ar);
            return gases;
          }
          return 'Não é do tipo AR';
        } catch (error) {
          this.logger.error(err);
          throw err;
        }
      }
    }
  },

  methods: {
    isAir(content) {
      if (!!content.includes('oxigenio') || !!content.includes('carbono')) {
        return false;
      }
      return true;
    }
  }
};
