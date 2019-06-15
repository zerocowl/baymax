module.exports = {
  name: 'laringe',

  actions: {
    clean: {
      async handler(ctx) {
        try {
          const hdAir = this.hydrate(ctx.params);
          const gasCarbono = await ctx.call('traqueia.transport', hdAir);
          return gasCarbono;
        } catch (error) {
          this.logger.error(error);
          throw error;
        }
      }
    }
  },

  methods: {
    hydrate(content) {
      const allGases = content.split('-').filter(word => word === 'oxigenio' || word === 'carbono');
      return allGases;
    }
  }
};
