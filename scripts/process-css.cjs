const fs = require('fs')
const postcss = require('postcss')
const cfg = require('../postcss.config.cjs')

async function run(){
  try{
    const input = fs.readFileSync('src/index.css','utf8')
    const processor = postcss(cfg.plugins || cfg)
    const result = await processor.process(input, { from: 'src/index.css' })
    fs.writeFileSync('out.css', result.css)
    console.log('Wrote out.css — first 800 chars:\n')
    console.log(result.css.slice(0,800))
  }catch(err){
    console.error(err)
    process.exit(1)
  }
}

run()
