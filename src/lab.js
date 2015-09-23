import request from 'request'

export default fox => {
  fox.add(res => {
    if(/^ラボ$/.test(res.text)) {
      const url = 'https://tdu13fi.herokuapp.com/api/v1/count'
      request(url, (err, response, body) => {
        const data = JSON.parse(body)
        const arr = []
        for(let e in data) {
          arr.push(`${e}研${data[e]}人`)
        }
        console.log(arr)
        res.reply(arr.join("\n"))
      })
    }
  })
}
