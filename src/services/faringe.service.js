module.exports = {
  name: 'faringe',

  actions: {
    transport: {
      async handler(ctx) {
        const { ar } = ctx.params;
        try {
          // eslint-disable-next-line no-undef
          if (isAir(ar)) {
            const gases = await ctx.call('laringe.transport', ar);
            return gases;
          }
          return 'Não é do tipo AR';
        } catch (error) {
          this.logger.error(error);
          throw error;
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
