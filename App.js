import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import QuestionScreen from './activity/question'
import Logo from './assets/start-logo.png'

class HomeScreen extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('./assets/start-logo.png')} style={{height : 150, width: 150, marginBottom: 100}}/>
        <Button color="#e74c3c" title="Start Survey" onPress={() => navigate('Question', {name : 'Rex'})}/>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown : false
    }
  },
  Question : {
    screen : QuestionScreen,
  }
});

export default createAppContainer(AppNavigator);