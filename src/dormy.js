import request from 'request'
import moment from 'moment'

export default fox => {
  fox.add(res => {
    if(res.text === '今日の飯') {
      const d = moment().format('YYYY-MM-DD')
      const url = `http://www.いろはす.xyz/api/v1/search?type=a1&date=${d}`
      request(url, (err, response, body) => {
        const json = JSON.parse(body).dinner.map(x => '☆' + x)
        const str = "今日の夕食は\n" + json.join('\n')
        res.reply(str)
      })
    }
  })
}
