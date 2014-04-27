'use strict';

module.exports = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  staticBase: 'client',
  loggerOptions: 'dev',
  serialPort: {
    path: '/dev/tty.usbserial-AD01TFC3',
    options: {
      baudRate: 115200
    }
  }
};
