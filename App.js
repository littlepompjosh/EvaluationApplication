import React from 'react';
import { Animated,
  View, 
  Text, 
  Image,
  StyleSheet, 
  TouchableOpacity ,
  Dimensions,
  ToastAndroid,
  Alert
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import QuestionScreen from './components/slider'
import ThanksScreen from './activity/thanks'
import Start from './components/start'
import Guest from './components/guest'
import Ping from 'react-native-ping';
import Instruct from './components/instructions';
import Suggest from './components/comment';

// PARSE SERVER CONFIGURATION
import { AsyncStorage } from "react-native";
var Parse = require('parse/react-native');
Parse.setAsyncStorage(AsyncStorage);
Parse.initialize('EvalAPP', 'EvalMasterKey');
var server_url = 'https://jobstream-parse.ml/evaluation'
Parse.serverURL = server_url;



// Functions
import {getData, addNewData} from './function'

var questionnaires = null;

class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state={
      visible:"none",
      isLoading:false,
      data : null,
      toast_label : 'Loading...'
    }
  }

  componentDidMount = async() =>{
    
    this.setState({
      isLoading : true, visible: 'flex'
    })

      try {
        
        const ms = await Ping.start('216.58.196.46',{ timeout: 1000 });
        console.log(ms);

        getData().then(questions => {
          // console.log(questions)

          
          // ToastAndroid.showWithGravity(
          //   JSON.stringify(questions),
          //   ToastAndroid.LONG,
          //   ToastAndroid.BOTTOM,
          // );

          if(questions !== undefined){
            questionnaires = questions
            
            
            this.setState({
              isLoading : false, visible: 'none'
            })
          }
        })

      } catch (error) {
        
        this.setState({toast_label : "NO INTERNET CONNECTION"})
        ToastAndroid.showWithGravity(
          'NO INTERNET CONNECTION',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        )
        console.log('special code',error.code, error.message);
      }

      
      

      
  }

  toast =()=>{
    if(this.state.visible === "none"){
      this.setState({visible:"flex"})
    }
  }



  render() {

    var width = Dimensions.get('window').width; 
    const {navigate} = this.props.navigation;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"#fff" }}>
        <View style={{flex:5, alignItems: 'center', justifyContent: 'center',}}>
          <Text style={styles.design}> 
            <Text style={{color:"#0054db", fontWeight:"bold"}}>
              STI 
            </Text> College Marikina  
          </Text>
          <Text style={styles.designs}> Exposition : 2020 </Text> 
        <Image source={require('./assets/logo.png')} style={{height : 150, width: 150, marginBottom: 100}}/>
        {/* <View >
        <Button  title = 'Start Survey' style={styles.butones} onPress={() => navigate('Question')}/>
        </View> */}
        </View>
        <View style={{flex:1}}>
        <TouchableOpacity
          disabled={this.state.isLoading === true ? true:false}
          // onPress={() => navigate('Question')}
          onPress={()=> navigate('Question', {qData : questionnaires})}
          style={{
            height:50,
            width:width/1.2,
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

        {/* <View>
          <Button title="TEST SERVER CONNECTION"/>
        </View> */}
        
       
        <View style={[{display:this.state.visible},styles.toastContainer]}>
          <View style={[{display:this.state.visible},styles.toast]}>
            <Text style={styles.toastText}>{this.state.toast_label}</Text>
          </View>
        </View>
       

      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  
  
  Start: {
    screen: Start,
    navigationOptions: {
      headerShown : false
    }
  },
  Guest: {
    screen: Guest,
    navigationOptions: {
      headerShown : false
    }
  },
  Instruct: {
    screen: Instruct,
    navigationOptions: {
      headerShown : false
    }
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown : false
    }
  },
  Question : {
    screen : QuestionScreen,
    // params : {question : questionnaires},
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
  },
  Suggest: {
    screen: Suggest,
    navigationOptions: {
      headerShown : false
    }
  },

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
    width:180,
    backgroundColor:"rgba(0,0,0,0.5)",
    justifyContent:"center",
    alignItems:"center",
   
    borderRadius:12
  },
  toastText:{
    textAlign: 'center',
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