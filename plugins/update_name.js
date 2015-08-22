'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function (fox) {
  fox.add(function (res) {
    if (/.*\(@akameco\)$/.test(res.text)) {
      var _ret = (function () {
        var name = res.text.match(/(.*)\(@akameco\)/)[1];
        if (name.length > 20) {
          res.reply('20文字以上の名前は設定不可能なんっ！');
          return {
            v: undefined
          };
        }
        fox.twit.post('account/update_profile', { name: name }, function (err, data, response) {
          res.reply(name + 'に改名しました');
        });
      })();

      if (typeof _ret === 'object') return _ret.v;
    }
  });
};

module.exports = exports['default'];