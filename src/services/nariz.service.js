module.exports = {
  name: 'nariz',

  actions: {
    respiracao: {
      async handler(ctx) {
        const { ar } = ctx.params;
        const arFiltrado = this.filter(ar);
        try {
          const gasCarbono = await ctx.call('faringe.transport', {
            ar: arFiltrado
          });
          return gasCarbono;
        } catch (error) {
          this.logger.error(err);
          throw err;
        }
      }
    }
  },

  methods: {
    filter(ar) {
      return ar.replace(/[^a-z.]/g, ''); //deixa apenas as letras minusculas
    }
  }
};
