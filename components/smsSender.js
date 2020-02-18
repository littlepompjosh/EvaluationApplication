// var smsGateway = require('sms-gateway-nodejs')('regiebadion361@gmail.com', '6fe6465f7f')

import axios from 'axios'

export async function sendSMS (mobile, code, host_id) {

  console.log('SENDING SMS AXIOS');

  var data = [{ "phone_number": mobile,
                "message": "STI Evaluation System : Verification Code : " + code,
                "device_id": host_id}
              ];

    return fetch('https://smsgateway.me/api/v4/message/send',
    {
        method: 'POST', 
        headers:{
            'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhZG1pbiIsImlhdCI6MTU4MjAwNjI0NCwiZXhwIjo0MTAyNDQ0ODAwLCJ1aWQiOjc3NTQ4LCJyb2xlcyI6WyJST0xFX1VTRVIiXX0.xw6fz82UKq9xUIgxht4691b8qIsE6JT9pklGNhW5GTQ'
        },
        body: JSON.stringify(data)
    })
    .then((response) => {
      return response.json()
    }).catch((error) => {
        return error;
    })
// }

}


export function getSMS_Status (message_id) {

    
    console.log('GETTING SMS STATUS : ' + message_id);

    var URL = 'https://smsgateway.me/api/v4/message/' + message_id;
    var APIKEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhZG1pbiIsImlhdCI6MTU4MjAwNjI0NCwiZXhwIjo0MTAyNDQ0ODAwLCJ1aWQiOjc3NTQ4LCJyb2xlcyI6WyJST0xFX1VTRVIiXX0.xw6fz82UKq9xUIgxht4691b8qIsE6JT9pklGNhW5GTQ'
    return axios.get(URL, { headers: { Authorization: APIKEY } }).then(response => {
      // If request is good...
      console.log(response.data.status)
      return response.data.status;
    })
    .catch((err) => {
      return {error: err};
    });


    // return fetch('https://smsgateway.me/api/v4/message/' + message_id,
    // {
    //     method: 'GET', 
    //     headers:{
    //         'Authorization': ''
    //     }
    // })
    // .then((response) => {
    //   console.log(response)
    // }).catch((error) => {
    //     console.log(error);
    // })
// }

}