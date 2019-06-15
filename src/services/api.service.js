'use strict';
import ApiGateway from 'moleculer-web';
import { UAParser } from 'ua-parser-js';

const parser = new UAParser();
module.exports = {
  name: 'api',

  mixins: [ApiGateway],

  settings: {
    callOptions: {
      timeout: 3000
    },

    cors: {
      origin: '*',
      methods: ['GET', 'OPTIONS', 'POST', 'PUT', 'DELETE', 'HEAD'],
      allowedHeaders: '*',
      exposedHeaders: '*',
      credentials: false,
      maxAge: null
    },

    port: process.env.PORT || 3000,

    rateLimit: {
      window: 10 * 1000,
      limit: 10,
      headers: true
    },

    routes: [
      {
        path: '/v1/',
        aliases: {
          'GET gas': 'gas.list'
        },

        bodyParsers: {
          json: true,
          urlencoded: {
            extended: true
          }
        },

        async onAfterCall(ctx, route, req, res, data) {
          res.setHeader('X-Response-Type', typeof data);
          return data;
        },

        async onBeforeCall(ctx, route, req, res) {
          ctx.meta.userAgent = parser
            .setUA(req.headers['user-agent'])
            .getResult();
        }
      }
    ]
  },
  methods: {},
  events: {
    'node.broken'(node) {
      this.logger.warn(`The ${node.id} node is disconnected!`);
    }
  }
};
