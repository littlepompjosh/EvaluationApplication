import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class QuestionScreen extends React.Component {
  render() {
    //   console.log(JSON.stringify());
      var params = this.props.navigation.state.params;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Question Screen {params.name}</Text>
      </View>
    );
  }
}


export default QuestionScreen;