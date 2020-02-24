const mongoose=require('mongoose')
function model (modelName,schemaObj={}) {
  const schema=mongoose.Schema(schemaObj)
  return  mongoose.model(modelName,schema)
}

module.exports={model}