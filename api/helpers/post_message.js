const unirest = require('unirest')

const smsUrl = 'https://api.sandbox.africastalking.com/version1/messaging'

const sendMess= (text)=>{
    const header= {
        apiKey : '3ca5f5721841ef6ad6ddc1510c8896213383b9d33782289b583ccdbc588bb8f2',
        ContentType: 'application/json'
    }
    const body = {
          username: 'sandbox',
          to: '+2540706229743',
          from: '2319',
          message: text
    
    }

    const req = unirest.post(smsUrl);
    
    req.headers(header)
    req.send(body);
    req.end(function (resp) {
                if (resp.status === 201) { // API returns CREATED on success!?
                    console.log('Success')
                    //resolve(resp.body);
                } else {
                    console.log('err')
                    //reject(resp.body || resp.error);
                }
            })
    
}

module.exports={
    sendMess
}