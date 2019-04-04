const npsUtils = require('nps-utils');

module.exports = {
  scripts: {
    default: 'echo 1111',
    demo: {
      default: 'node hello.js'
    },
    hello: {
      default: 'echo 2222',
      another: 'echo 3333'
    },
    helloConcurrent: {
      default: npsUtils.concurrent.nps('helloConcurrent.one', 'helloConcurrent.two', 'helloConcurrent.three'),
      one: 'echo 444444',
      two: 'echo 555555',
      three: 'echo 666666',
    },
    helloSeries: {
      default: npsUtils.series.nps('helloSeries.one', 'helloSeries.two', 'helloSeries.three'),
      one: 'echo 777777',
      two: 'echo 888888',
      three: 'echo 999999',
    }
  }
};
