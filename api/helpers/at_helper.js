const options = {
    apiKey: 'de36c2117ea6b25192306f408cd4e0ef7ef11681858f9272af6365cd6af6828f',
    username: 'sandbox'
}

const AfricasTalking = require('africastalking')(options);

const sms = AfricasTalking.SMS;

const sendATMessage=()=> {
    const options = {
        // Set the numbers you want to send to in international format
        to: '+254706229743',
        // Set your message
        message: "Hello",
        // Set your shortCode or senderId
        from: '+254702345678'
    }

    // That’s it, hit send and we’ll take care of the rest
    sms.send(options).then(res=>{
        console.log(res.SMSMessageData.Recipients)
    }).catch(err=>{
        console.log(err)
    })
}

module.exports= {
    sendATMessage
}