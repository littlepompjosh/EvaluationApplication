var smsGateway = require('sms-gateway-nodejs')('regiebadion361@gmail.com', '6fe6465f7f')

export function sendSMS (mobile, code) {
  smsGateway.message.sendMessageToNumber('115489', mobile, 'STI Evaluation Verification Code : ' + code)
  .then((response) => {
    // do something with response
  })
  .catch((error) => {
    // handle error
  })

}