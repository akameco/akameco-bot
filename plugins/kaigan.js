"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (fox) {
  fox.add(function (res) {
    var text = "( ✹‿✹ )開眼だァーーーーーーーーーーー！！！！！！！！！！！（ﾄｩﾙﾛﾛﾃｯﾃﾚｰｗｗｗｗｗｗﾃﾚﾃｯﾃﾃｗｗｗｗﾃﾃｰｗｗｗ）ｗｗｗﾄｺｽﾞﾝﾄｺﾄｺｼﾞｮﾝｗｗｗｽﾞｽﾞﾝｗｗｗｗｗ（ﾃﾃﾛﾘﾄﾃｯﾃﾛﾃﾃｰ";
    if (/^@_zxa 開眼/.test(res.text)) res.reply(text);
  });
};

module.exports = exports["default"];