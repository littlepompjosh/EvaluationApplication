/**
 * @format
 */
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Splash from './components/splashScreen'


class Main extends Component {
    constructor(props){
        super(props);
       this.state={
           current:'Splash'
       }
       setTimeout(()=>{
            this.setState({current:"Login"})
       },1800)
    }
    render() {
        let mainScreen =  this.state.current === 'Splash' ? <Splash/>:<App/>
        return mainScreen
    }


}


AppRegistry.registerComponent(appName, () => Main);
