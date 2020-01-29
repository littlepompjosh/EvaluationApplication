import {ToastAndroid} from 'react-native'
var Parse = require("parse/react-native");

export function checkServer(){

    var Source = Parse.Object.extend("questionnaire");
    var query = new Parse.Query(Source);
    query.get("L49O4TOd2m")
    .then((result) => {
      // The object was retrieved successfully.

      return (
            ToastAndroid.showWithGravity(
                JSON.stringify(result),
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
            )
        )
    }, (error) => {
      console.log(error)
      // The object was not retrieved successfully.
      // error is a Parse.Error with an error code and message.
    });
    
    
    
}