const assistant_control = require('../controllers/credentials_controller')
const assistant1 = require('../helpers/assistant_helper')
const at_messsage =require ('../helpers/post_message')
//const at = require('../helpers/at_helper')
const util = require('util');

const messages = (req,res)=>{    
    const text= req.swagger.params.session.originalValue.text
    const phone = req.swagger.params.session.originalValue.from
    assistant_control.assistant.createSession({
        assistant_id: '2565ef4c-4ae4-4e3d-8fc0-3a2e4c7351be'
         }).then(res=>{
           session_id = res.session_id
           //console.log(session_id)
           assistant1.sendMessage(session_id,text)
         }).catch(err=>{
             console.log(err)
         }) 
    console.log(text)
    console.log(phone)

    const message=util.format('Success')
    res.status(200).send({message})
    
}

module.exports={
        messages
}