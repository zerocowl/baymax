export default {
  namespace: 'baymax',
  transporter: 'TCP',
  logger: true,
  logLevel: 'info',
  logFormatter: 'short',
  cacher: {
    type: 'memory',
    options: {
      maxParamsLength: 100
    }
  },
  metrics: true,
  validation: true
};
