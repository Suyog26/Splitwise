const jwt = require("jsonwebtoken")
const userModel=require("../models/Userschema.js")

const checkUserauth =async(req,res,next)=>{
    let token
    const {authorization}=req.headers
    if(authorization && authorization.startsWith("Bearer")){
        try {
        // get token from headers
           token = authorization.split(" ")[1]

        //    verify token 
        const {userID}=jwt.verify(token,process.env.JWT_SECRET_KEY)

        // get user from token
        req.user=await userModel.findById(userID).select('-password')
        next()
        } catch (error) {
          console.log(error)
          res.status(401).send({"status":"failed","message":"Unauthorized USer"})  
        }
    }
    if(!token){
        res.status(401).send({"status":"failed","message":"unauthorized user, no token"})
    }
}

module.exports=checkUserauth