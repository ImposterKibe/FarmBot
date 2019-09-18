require('dotenv').config()

//Set up Assistant service wrapper.

const AssistantV2 = require('ibm-watson/assistant/v2');

const assistant = new AssistantV2({
  version: process.env.ASSISTANT_VERSION,
  username: process.env.ASSISTANT_USERNAME, // replace with service username,
  password: process.env.ASSISTANT_PASSWORD, // replace with service password,
  url: process.env.ASSISTANT_URL,
});


const workspace_id = process.env.WORKSPACE_ID

//Africa's talking service 
const options = {
    apiKey: process.env.AT_API_KEY,
    username: process.env.AT_USERNAME,
};

module.exports={
    assistant,
    workspace_id,
    options
}

//Live: https://api.africastalking.com/version1/messaging
//Sandbox: https://api.sandbox.africastalking.com/version1/messaging
