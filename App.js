import React from 'react';
import { View, Text, Button, Image,StyleSheet, TouchableOpacity ,TouchableHighlight} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import QuestionScreen from './components/slider'
import ThanksScreen from './activity/thanks'
import Logo from './assets/rating.png'

// PARSE SERVER CONFIGURATION
import { AsyncStorage } from "react-native";
var Parse = require('parse/react-native');
Parse.setAsyncStorage(AsyncStorage);
Parse.initialize('EvalAPP', 'EvalMasterKey');
Parse.serverURL = 'http://192.168.100.12:1337/parse';

// Functions
import {checkServer} from './function'


class HomeScreen extends React.Component {



  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: '#686de0' }}>
        <Text style={styles.design}> STI College Marikina  </Text>
        <Text style={styles.designs}> Exposition 2020 </Text> 
        <Image source={require('./assets/rating.png')} style={{height : 150, width: 150, marginBottom: 100}}/>
        {/* <View >
        <Button  title = 'Start Survey' style={styles.butones} onPress={() => navigate('Question')}/>
        </View> */}
        <TouchableOpacity
          onPress={() => navigate('Question')}
          style={{
            height:50,
            width:300,
            borderRadius:50,
            backgroundColor:"#dcdcdc",
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
          }}
        >
          <Text style={{fontWeight:"bold", fontSize:15}}>
            Start Survey
          </Text>
        </TouchableOpacity>
        
        <View style={{marginTop: 100}}>
          <Button onPress={() => {checkServer()}} title="TEST SERVER CONNECTION" />
        </View>
       

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
      headerShown : false,
      // drawerLockMode : 'locked-open'
    }
  },
  Thanks : {
    screen : ThanksScreen,
    navigationOptions : {
      headerShown : false
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
    paddingTop: 30,
    borderRadius: 30,
  },
});