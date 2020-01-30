import React from 'react';
import { Button, View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import ThanksImg from '../assets/thanks.png';

class Thanks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <View style={{flex : 1, backgroundColor : '#fff', flexDirection: 'column', justifyContent : 'center', alignItems : 'center'}}>
                <View style={{flex:5, justifyContent:"center", alignItems:"center"}}>
                <View>
                    <Image source={require('../assets/like.png')} style={{height : 150, width: 150, marginBottom: 30}}/>
                </View>
                <Text style={{fontSize : 20, marginBottom : 60, fontWeight:"500"}}>Thank You for Answering!</Text>
                
                </View>
                {/* <Button color="#696464" title="Return" onPress={() => this.props.navigation.navigate('Home')}/> */}
                <View style={{flex:1}}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Home')}
                        style={{
                            height:50,
                            width:300,
                            borderRadius:50,
                            backgroundColor:"#3498db",
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"center"
                        }}
                        >
                            <Text style={{fontWeight:"bold", fontSize:15,color:"#fff"}}>
                                Return
                            </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
 
export default Thanks;