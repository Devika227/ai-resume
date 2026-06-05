import http from 'http'
const url = 'http://127.0.0.1:5175/src/index.css'

http.get(url, (res) => {
  let body = ''
  res.on('data', (chunk) => body += chunk)
  res.on('end', () => {
    console.log('status', res.statusCode)
    console.log('contains bg-white', body.includes('.bg-white'))
    console.log('contains bg-slate-50', body.includes('.bg-slate-50'))
    console.log('contains text-slate-800', body.includes('.text-slate-800'))
    console.log('contains border', body.includes('.border'))
    console.log('length', body.length)
  })
}).on('error', (err) => {
  console.error(err)
  process.exit(1)
})
