export default fox => {
  fox.add(res => {
    if(/.*\(@akameco\)$/.test(res.text)) {
      const name = res.text.match(/(.*)\(@akameco\)/)[1];
      if(name.length > 20) {
        res.reply('20文字以上の名前は設定不可能なんっ！')
        return;
      }
      fox.twit.post('account/update_profile', {name: name}, (err, data, response) => {
        res.reply(`${name}に改名しました`)
      });
    }
  });
}
