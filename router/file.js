const multer=require('multer')
const path=require('path')
const express=require('express')
const router=express.Router()
const imgPath=path.join(__dirname,'../static/uploads')
const storage=multer.diskStorage({
  //设置上传路径
  destination:(req,file,cb)=>{
    cb(null,imgPath)
},
  // 重命名
  filename:(req,file,cb)=>{
    console.log(file)
    const {originalname}=file
    cb(null,Date.now()+'-'+originalname)
  }
})

const upload=multer({
  storage
})

router.post('/upload',upload.single('img'),(req,res)=>{
  let {size,mimetype,filename}=req.file
  console.log(req.file)
  let rType=mimetype.split('/')[1]
  const type=['jpg','png','jpeg','gif']
  if(type.indexOf(rType)==-1) return res.send({error:'-1',msg:'文件格式不对'})
  if(size>50000) return res.send({error:-1,msg:'尺寸过大'})
      const img=`/uploads/${filename}`
      res.send({error:0,msg:'上传ok。。。',img})
})
module.exports=router