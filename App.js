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
Parse.initialize('evaluationAppId', '6fe6465f7f');
Parse.serverURL = 'http://192.168.100.100:1337/parse';

// Functions
import {getData, addNewData} from './function'


class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state={
      visible:"none",
      isLoading:false,
      data : null
    }
  }

  componentDidMount = () =>{

    this.setState({
      isLoading : true, visible: 'flex'
    })

    getData().then(result => {
      console.log(result)
      if(result !== undefined){
        this.setState({data : result});
        
        this.setState({
          isLoading : false, visible: 'none'
        })
      }
    })
  }

  toast =()=>{
    if(this.state.visible === "none"){
      this.setState({visible:"flex"})
    }
  }



  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"#fff" }}>
        <View style={{flex:5, alignItems: 'center', justifyContent: 'center',}}>
          <Text style={styles.design}> 
            <Text style={{color:"#0054db", fontWeight:"bold"}}>
              STI 
            </Text> College Marikina  
          </Text>
          <Text style={styles.designs}> Exposition 2020 </Text> 
        <Image source={require('./assets/rating.png')} style={{height : 150, width: 150, marginBottom: 100}}/>
        {/* <View >
        <Button  title = 'Start Survey' style={styles.butones} onPress={() => navigate('Question')}/>
        </View> */}
        </View>
        <View style={{flex:1}}>
        <TouchableOpacity
          disabled={this.state.isLoading === true ? true:false}
          // onPress={() => navigate('Question')}
          onPress={()=>this.setState({visible:"flex",isLoading:true })}
          style={{
            height:50,
            width:350,
            borderRadius:50,
            backgroundColor:"#3498db",
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
          }}
        >
          <Text style={{fontWeight:"bold", color:"#fff",fontSize:15}}>
            Start Survey
          </Text>
        </TouchableOpacity>
        </View>

        <View>
          <Button title="TEST SERVER CONNECTION"/>
        </View>
        
       
        <View style={[{display:this.state.visible},styles.toastContainer]}>
          <View style={[{display:this.state.visible},styles.toast]}>
            <Text style={styles.toastText}>Loading....</Text>
          </View>
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
  toastContainer:{
    position:"absolute",
    justifyContent:"center",
    alignItems:"center",
    top:0,
    bottom:0,
    left:0,
    right:0,
  },
  toast:{
    height:150,
    width:150,
    backgroundColor:"rgba(0,0,0,0.5)",
    justifyContent:"center",
    alignItems:"center",
   
    borderRadius:12
  },
  toastText:{
    fontSize:18,
    fontWeight:"800",
    color:"#fff",
  },
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