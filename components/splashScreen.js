import React, { Component } from 'react';
import { Image,View,Text,Animated } from 'react-native';

class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = { fade: new Animated.Value(0) }
    }

    componentDidMount () {
        Animated.timing(
            this.state.fade,
          {  toValue:1,
            duration:1000}
        ).start();
      }
    
    render() { 
        let fade = this.state.fade
        return ( 
            <Animated.View style={{flex:1, justifyContent:"center", alignItems:"center", opacity:fade}}>
                <Text  style={{fontSize:40, fontWeight:"bold"}}>
                    Expo
                </Text>
            </Animated.View>
         );
    }
}
 
export default Splash;