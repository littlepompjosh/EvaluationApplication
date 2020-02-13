import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Button,
    TouchableOpacityBase,
} from 'react-native'


class Instruct extends React.Component{
    render(){
        return(
            <View style={{padding: 30}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}> Instructions: </Text>
                <Text> 1. Answer the Survey Questions by rating them 1 out of 5.</Text>
                <View style={{height:20, width:"100%"}} /> 
                <Text> 2. Each emoji represent the satisfactory rating of Very Disastisfied to Very Satisfied.</Text>
                <View style={{height:20, width:"100%"}} /> 
                <Text>3. Click on the emoji which values your satisfaction about the question.</Text>
                <View style={{height:20, width:"100%"}} /> 
                <Text>4. You can also review your answers by swiping back.</Text>
                <View style={{height:20, width:"100%"}} /> 
                <Text>5. At the end of the 10 questions, you may write a comment or suggestion.</Text>
                <View style={{height:20, width:"100%"}} /> 
                <Text>6. If you have any complaints or questions, kindly ask the admins at the booth.</Text>
                <View style={{height:20, width:"100%"}} /> 
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
export default Instruct;


