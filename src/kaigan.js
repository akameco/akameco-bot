export default (fox) => {
  fox.add((res) => {
    let text = "( ✹‿✹ )開眼だァーーーーーーーーーーー！！！！！！！！！！！（ﾄｩﾙﾛﾛﾃｯﾃﾚｰｗｗｗｗｗｗﾃﾚﾃｯﾃﾃｗｗｗｗﾃﾃｰｗｗｗ）ｗｗｗﾄｺｽﾞﾝﾄｺﾄｺｼﾞｮﾝｗｗｗｽﾞｽﾞﾝｗｗｗｗｗ（ﾃﾃﾛﾘﾄﾃｯﾃﾛﾃﾃｰ"
    if(/^@akameco 開眼/.test(res.text)) res.reply(text);
  });
}
