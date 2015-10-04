'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

exports['default'] = function (fox) {
  fox.add(function (res) {
    if (/^ラボ$/.test(res.text)) {
      var url = 'https://tdu13fi.herokuapp.com/api/v1/count';
      (0, _request2['default'])(url, function (err, response, body) {
        var data = JSON.parse(body);
        var arr = [];
        for (var e in data) {
          arr.push(e + ' ' + data[e]);
        }
        console.log(arr);
        res.reply(arr.join("\n"));
      });
    }
  });
};

module.exports = exports['default'];