const express=require('express')
const router=express.Router()
const userModel=require('../models/userModel')
const emailUtils=require('../utils/utils')
let codeCache={}
router.post('/reg',(req,res)=>{
  let {us,ps}=req.body
  console.log(us,ps)
  if(!us||!ps) return res.send({error:-1,msg:'参数错误'})
  userModel.find({us})
    .then(data=>{
      if(data.length) return res.send({error:-1,msg:'用户名已存在'})
      return   userModel.insertMany({us,ps})
    })

    .then(data=>{
      console.log('注册成功')
      res.send({error:0,msg:'注册成功'})
    }).catch(e=>{
    console.log('注册失败')
    res.send({error:-1,msg:'注册失败'})
  })
})
router.post('/getEmailCode',(req,res)=>{
  console.log('接收请求数据',req.body.mail)
const {mail}=req.body
  const code=parseInt(Math.random()*10000)
  emailUtils.send(mail,code)
    .then(data=>{
      console.log('验证码已发送')
      codeCache[mail]=code
      console.log('邮箱验证码>>>>',mail,codeCache[mail])
      res.send({error:0,msg:'验证码已发送'})
    })
})
router.post('/login',(req,res)=>{
  let {us,ps,code}=req.body
  if(!us||!ps||!code) return res.send({error:-1,msg:'参数错误'})
  console.log(codeCache,code)
  if(+codeCache[us]!==+code) return res.send( {error:-1,msg:'验证码错误'})
  userModel.find({us,ps})
    .then(data=>{
      console.log(data)
      if(data.length) return res.send({error:0,msg:'登录成功'})
      res.send({error:-1,msg:'用户名或密码不存在'})
    })
})

module.exports=router