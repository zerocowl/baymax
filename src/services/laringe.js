module.exports = {
  name: 'laringe',

  actions: {
    transport: {
      async handler(ctx) {
        const { ar } = ctx.params;
        try {
          const hdAir = this.hydrate(ar);
          const gasCarbono = await ctx.call('traqueia.transport', hdAir);
          return gasCarbono;
        } catch (error) {
          this.logger.error(err);
          throw err;
        }
      }
    }
  },

  methods: {
    hydrate(content) {
      const allGases = content
        .split('-')
        .filter(word => word === 'oxigenio' || word === 'carbono');
      return allGases;
    }
  }
};
