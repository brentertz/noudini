'use strict';

module.exports = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  staticBase: '../client/build',
  loggerOptions: 'dev',
  arduino: {
    board:  {
      debug: true,
      repl: false
    },
    led: {
      pin: 13
    },
    button: {
      pin: 7
    }
  }
};
