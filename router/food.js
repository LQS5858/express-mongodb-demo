const express=require('express')
const router=express.Router()
const foodModel=require('../models/foodModel')

router.post('/add',(req,res)=>{
 // let data={
 //  name:'火山飘雪',
 //  price:'5',
 //  desc:'desc',
 //  typename:'呵呵呵',
 //  typeid:'7',
 //  img:'/assets/images/logo.png'
 // }
 let {name,price,desc,typename,typeid,img}=req.body
  console.log(req.body)
 foodModel.insertMany({name,price,desc,typename,typeid,img})
   .then(data=>{
    res.send({error:0,msg:'添加成功'})
   })
   .catch(error=>{
     res.send({error:-1,msg:error})
   })
})
router.get('/getInfoByType',(req,res)=>{
  let {typeid}=req.query
  console.log(typeid)
  foodModel.find({typeid})
    .then(data=>{
      console.log('查询数据>>>',data)
      if(!data.length) return res.send({error:-1,msg:'无数据'})
      res.send({error:0,msg:'查询成功'})
    })
    .catch(error=>{
      res.send({error:-1,msg:'查询失败'})
      console.log('查询失败')
    })
})
router.post('/getKw',(req,res)=>{
  let {kw}=req.body
  let regexp=new RegExp(kw)
  // foodModel.find({name:{$regex:regexp}})
  foodModel.find({$or:[{name:{$regex:regexp}},{desc:{$regex:regexp}}]})
    .then(data=>{
      res.send({error:0,msg:data})
    })
})

router.post('/del',(req,res)=>{
  let {_id}=req.body
  foodModel.remove({_id:['5e4e2567b41e2cc4005d5c16','5e4e25fad94ffbc4171d9fd5']})
    .then(data=>{
      res.send({error:0,msg:'删除ok'})
    })
    .catch(error=>{
      res.send({error:-1,msg:'删除失败'})
    })
})
router.post('/update',(req,res)=>{
  let {name,price,desc,typename,typeid,img,_id}=req.body
  foodModel.update({_id},{name,price,desc,typename,typeid,img})
    .then(data=>{
      res.send({error:0,msg:'修改ok'})
    })
    .catch(error=>{
      res.send({error:-1,msg:'修改失败'})
    })
})
router.post('/getInfoPage',(req,res)=>{
  let {pageSize=2,page=1}=req.body
  foodModel.find().limit(+pageSize).skip((page-1)*pageSize)
    .then(data=>{
      res.send({error:0,msg:'查询分页成功',data})
    })
    .catch(error=>{
      res.send({error:-1,msg:'查询分页失败'})
    })
})
module.exports=router