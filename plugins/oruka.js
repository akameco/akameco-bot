'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function (fox) {
  fox.add(function (res) {
    if (/^(赤目|あかめ|赤芽)おるか/.test(res.text)) {
      res.reply('おるでw');
    }
  });
};

module.exports = exports['default'];