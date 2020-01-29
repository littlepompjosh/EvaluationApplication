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
      // The object was not retrieved successfully.
      // error is a Parse.Error with an error code and message.
    });
}

export function addNewData() {

  var Source = Parse.Object.extend("questionnaire");
    var query = new Source();
    query.set("question", "kumain na ako hehehe");

    query.save().then((result) => {
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