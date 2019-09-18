'use strict';
require ('dotenv').config
const User = require('../models/user');
const bcrypt = require('bcrypt')

const createUser= async (id,password)=>{
    //function to check whether email exists

    //
    const hashP = await bcrypt.hash(password,10)
    //console.log(hashP)
    const newUser = await User.create({
                id,
                password:hashP
        })  
}    
const findUserById = async (id) =>{
    const userDetails = await User.findAll({
        where:{id}
    })
    //console.log(userDetails)
    return userDetails
}
const findAllUsers = async ()=>{
    const userList = await User.findAll({
        raw:true
    }).catch(err=>{
        res.status(500).json({
            error:err
        })
    })
    return userList
}
module.exports = {
    createUser,
    findUserById,
    findAllUsers
}