export default (fox) => {
  fox.add((res) => {
    if(/^(赤目|あかめ|赤芽)おるか/.test(res.text)) {
      res.reply('おるでw');
    }
  });
}
