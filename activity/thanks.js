import React from 'react';
import { Button, View, Text, Image, Dimensions} from 'react-native';
import ThanksImg from '../assets/thanks.png';

class Thanks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <View style={{flex : 1, backgroundColor : '#fff', flexDirection: 'column', justifyContent : 'center', alignItems : 'center'}}>
                <View>
                    <Image source={require('../assets/like.png')} style={{height : 150, width: 150, marginBottom: 30}}/>
                </View>
                <Text style={{fontSize : 20, marginBottom : 60}}>THANK YOU FOR ANSWERING</Text>
                
                <Button title="Return" onPress={() => this.props.navigation.navigate('Home')}/>
            </View>
        );
    }
}
 
export default Thanks;