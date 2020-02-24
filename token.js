const jwt=require('jsonwebtoken')
// 产生token

let screat='ssfhfuduudjdhudduehdn'
let payload={
  us:'123',
  ps:'123'
}
const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cyI6IjEyMyIsInBzIjoiMTIzIiwiaWF0IjoxNTgyNDY1MzExfQ.-FL0jKAZSYoOC_yvK_dR-0mzDAjunHaQbBiAIZvIcPE'
const totken=jwt.sign(payload,screat)
jwt.verify(totken,screat,)
console.log('token',totken,(error,data)=>{
  if(error) console.log('无效toekn')
})