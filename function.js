import {ToastAndroid} from 'react-native'
var Parse = require("parse/react-native");

export async function getData(){

    var Source = Parse.Object.extend("questionnaire");
    var query = new Parse.Query(Source);

    // query.equalTo("objectId", "U2KxC8LqNE");

    return query.find().then((result) => {
      // The object was retrieved successfully.

      return result
    }, (error) => {
      console.log(error)
      return error
      // The object was not retrieved successfully.
      // error is a Parse.Error with an error code and message.
    });
}

export async function addNewData(arr) {

  var Source = Parse.Object.extend("answers");
    var query = new Source();
    query.set("answer_data", arr);

    return query.save().then(result => {
      // The object was retrieved successfully.

      return ({status : true, result : result})
        
    }, (error) => {
      console.log(error)
      return {status : false, error: error}
      // The object was not retrieved successfully.
      // error is a Parse.Error with an error code and message.
    });

}