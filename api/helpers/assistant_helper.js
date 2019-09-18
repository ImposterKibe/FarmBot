require('dotenv').config()

const assistant_controller = require('../controllers/credentials_controller')
const at= require('../helpers/at_helper')
const at_messsage =require ('../helpers/post_message')
//const prompt= require('prompt')
// Start conversation with empty message.
const new_text =''
const sendMessage = (id,text)=>{
  assistant_controller.assistant.message({
    assistant_id: '2565ef4c-4ae4-4e3d-8fc0-3a2e4c7351be',
    session_id: id,
    input:{
      'message_type': 'text',
      'text':text
    }
}).then(response=>{
  if (response.output.generic[0]
     == null){
    new_text = 'Your question will be reviewed'
    at_messsage.sendMess(new_text)
  }
  const text = response.output.generic[0].text
  //console.log(JSON.stringify(response, null, 2));
  //console.log(text)

  
  if (response.output.intents[0].intent.length > 0) {
     console.log('Detected intent: #' + response.output.intents[0].intent);
  }
  else{
 
    const text = 'Try again, '
    at_messsage.sendMess(text)
  }

   // Display the output from dialog, if any.
  if (text.length != 0) {
       console.log(text);
       at_messsage.sendMess(text)   
  }

}).catch(err => {
  console.log(err);
});
}
module.exports={
    sendMessage
    }
