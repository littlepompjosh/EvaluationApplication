import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Button,
    TouchableOpacityBase,
} from 'react-native'


class Suggest extends React.Component{
    render(){
        return(
            <View style={{padding:30}}>
                <Text style={{fontSize: 10, fontWeight: 'bold'}}> Thank you for answering, if you have any comments, suggestions
                    please tell us!
                </Text>
                <TextInput/>
                <TouchableOpacity 
                                 onPress={()=>{this.setState({modalVisible:false}),this.props.navigation.navigate('Thanks')}}
                            >
                                <View
                                    style={{
                                        marginTop:30,
                                        height:50, 
                                        width:"100%",
                                        backgroundColor:"#3498db",
                                        borderRadius:50,
                                        justifyContent:"center",
                                        alignItems:"center"
                                    }}
                                >
                                    <Text style={{color:"#fff"}}>Proceed</Text>
                                </View>
                            </TouchableOpacity>
            </View>
        );
    }
}
export default Suggest;

