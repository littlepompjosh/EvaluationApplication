import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import QuestionScreen from './components/slider'
import Logo from './assets/start-logo.png'

class HomeScreen extends React.Component {
  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize: 25, fontWeight: 'bold', marginBottom: 50}}> STI College Marikina Exposition 2020 </Text> 
        <Image source={require('./assets/start-logo.png')} style={{height : 150, width: 150, marginBottom: 100}}/>
        <Button color="#e74c3c" title="Start Survey" onPress={() => navigate('Question')}/>
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
    navigationOptions: {
      headerShown : false
    }
  }
});

export default createAppContainer(AppNavigator);