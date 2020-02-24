const mongoseModel=require('./index')

const obj={
  name:{type:String,required:true},
  price:{type:String,required:true},
  desc:{type:String,required:true},
  typename:{type:String,required:true},
  typeid:{type:Number,required:true},
  img:{type:String,required:true}
}
const foodModel=mongoseModel.model('food',obj)
module.exports=foodModel