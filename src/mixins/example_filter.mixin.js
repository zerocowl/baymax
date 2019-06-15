'use strict';

module.exports = {
  name: 'example',
  actions: {
    /**
     * Say a 'Hello World'
     *
     * @returns
     */
    helloWorld() {
      return this.sayHelloWorld();
    }
  },

  /**
   * Methods
   */
  methods: {
    sayHelloWorld() {
      return 'Hello World';
    }
  }
};
