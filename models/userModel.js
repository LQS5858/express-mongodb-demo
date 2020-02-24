const mongooseModel=require('./index')
const obj={
  us: {type: String,
    required: true
  },
  ps:{type:String,required: true},
  age:Number,
  sex:{
    type:Number,default:0
  }
}
const userModel=mongooseModel.model('user',obj)

module.exports=userModel