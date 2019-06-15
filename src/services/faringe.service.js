module.exports = {
  name: 'faringe',

  actions: {
    transport: {
      async handler(ctx) {
        const { ar } = ctx.params;
        try {
          // eslint-disable-next-line no-undef
          if (this.isAir(ar)) {
            const gases = await ctx.call('laringe.clean', ar);
            return gases;
          }
          return 'Isso não é AR';
        } catch (error) {
          this.logger.error(error);
          throw error;
        }
      }
    }
  },

  methods: {
    isAir(content) {
      console.log(content);
      if (content.includes('oxigenio') || content.includes('carbono')) {
        return true;
      }
      return false;
    }
  }
};
