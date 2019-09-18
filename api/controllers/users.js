require('dotenv').config()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const user= require('../helpers/users_helper')
const {
    createUser,
    findUserById
} 
= require('../helpers/users_helper')

const addUser = (req,res)=>{
    
    const message = "Success"
    const {id,password}= req.swagger.params.userDetails.value
    
        createUser(id, password).then(result=>{
            res.status(200).send({message})

        }).catch(err=>{
            console.log(err)
        })    
}

const getAllUsers = (res) =>{
    user.findAllUsers().then(users =>{
      //console.log(users)
      res.status(200).send(users)
    })
  }

const login = (req,res) =>{
    const {id,password}= req.swagger.params.userDetails.value
    console.log({id,password})
    findUserById(id).then(user=>{
        //check if there is no such user existing
        if (user.length < 1){
            return res.status(401).send('Auth Failed')
        }
        const payload = {
            id:user[0].dataValues.id,
            username: 'User '+ user[0].dataValues.id
         }
        const signOptions = {
             issuer:user,
            // subject: 'User '+ user[0].dataValues.id,
            // audience:'localhost:10010/login' ,
            expiresIn:'1h'
            // algorithm:'RS256'
         }
        const privateKey = process.env.JWT_KEY
        
        bcrypt.compare(password,user[0].dataValues.password,(err,result)=>{
            if(err){
               console.log("Auth Failed" + err )
           }
           if(result){
                //JWT SIGNING
               const token = jwt.sign(payload,privateKey,signOptions)
               console.log('Token ' + token)
               res.status(200).json({
                   message:"Auth Successfull",
                   Token: token
               })
               }
       })
        //console.log(user[0].dataValues.password)
        
    }).catch(err=>{
        console.log(err);   
    })
}

  module.exports = {
      getAllUsers,
      addUser,
      login
  }
