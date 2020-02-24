const nodeEmail = require('nodemailer')
const config = {
  host: "smtp.163.com",
  port: 465,
  secure: true,
  auth: {
    user: 'lqs5858@163.com',
    pass: 'Lqs365858'
  }
}
const transporter = nodeEmail.createTransport(config)

function send (mail,code) {
  const obj = {
    from: 'lqs5858@163.com',
    to: mail,
    subject: 'hello world',
    text:`你的邮箱验证码为:${code}`
  }
  return new Promise((resolve,reject)=>{
    transporter.sendMail(obj, (error, data) => {
      if(error){
        reject(error)
      }else {
        resolve(data)
      }
      console.log(error, data)
    })
  })
}
module.exports={send}