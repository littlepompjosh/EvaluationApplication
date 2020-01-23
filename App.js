import React from 'react';
import { View, Text, Button, Image,StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import QuestionScreen from './components/slider'
import Logo from './assets/rating.png'

class HomeScreen extends React.Component {
  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: '#b8b8c7' }}>
        <Text style={styles.design}> STI College Marikina  </Text>
        <Text style={styles.designs}> Exposition 2020 </Text> 
        <Image source={require('./assets/rating.png')} style={{height : 150, width: 150, marginBottom: 100}}/>
        <Button color="#696464" title = 'Start Survey' style={styles.butones} onPress={() => navigate('Question')}/>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown : false,
      gesturesEnabled: false
    }
  },
  Question : {
    screen : QuestionScreen,
    navigationOptions: {
      headerShown : false,
      // drawerLockMode : 'locked-open'
    }
  }
});

export default createAppContainer(AppNavigator);
const styles = StyleSheet.create({
  design: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    textAlign: 'center',
    marginBottom: 10,
  },
  designs: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    textAlign: 'center',
    marginBottom: 50,
  },
  butones: {
    padding: 30,
    borderRadius: 30,
  },
});