'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

exports['default'] = function (fox) {
  fox.add(function (res) {
    if (res.text === '今日の飯') {
      var d = (0, _moment2['default'])().format('YYYY-MM-DD');
      var url = 'http://www.いろはす.xyz/api/v1/search?type=a1&date=' + d;
      (0, _request2['default'])(url, function (err, response, body) {
        var json = JSON.parse(body).dinner.map(function (x) {
          return '☆' + x;
        });
        var str = '';
        if (json.length === 0) {
          str = '本日食堂はお休みです';
        } else {
          str = "今日の夕食は\n" + json.join('\n');
        }

        res.reply(str);
      });
    }
  });
};

module.exports = exports['default'];