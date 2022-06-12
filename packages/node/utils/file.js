const fs = require('fs')
const path = require('path')
const output = 'output'
const fileTxt = path.join('..', output, 'file.txt')
const fileCopy = path.join('..', output, 'fileCopy.txt')
//任何数据都可以用Buffer存储,可以设置编码
fs.writeFile(fileTxt, 'write file data 11 汉字', 'utf8', function(err) {
  if (err) throw err
  console.log('文件已被保存')
})

fs.readFile(fileTxt, function(err, data) {
  if (err) throw err
  console.log('文件已被读取', data.toString())
})

let readerStream = fs.createReadStream(fileTxt)
let writerStream = fs.createWriteStream(fileCopy)

readerStream.pipe(writerStream)
