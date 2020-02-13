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
            // <View style={{flex:1, padding:30}}>
            //     <View style={{flex:1,alignItems:"center", justifyContent:"flex-end"}}>
            //         <Text style={{fontSize:35, fontWeight:'bold'}}> Welcome </Text>
                   
            //     </View>
            //     <View
            //          style={{
            //             paddingTop:50,
            //             flex:2,
            //             alignItems:"center",
            //             justifyContent:"flex-start"
            //         }}
            //     >
                
            //     <Text style={{fontSize:18, }}> Are you a? </Text>
            //     <View style={{
            //             flexDirection:"row", 
            //             justifyContent:"space-around",
            //              alignItems:"center" }}>
            //         <TouchableNativeFeedback
            //             onPress={() => {
            //                 this.setModalVisible(true);
            //               }}
            //         > 
            //             <View 
            //                 style={{
            //                     justifyContent:"center",
            //                     alignItems:"center",
            //                     margin:20,
            //                     marginRight:30,
            //                     marginLeft:10,
            //                 }}
            //             >
            //             <View 
            //                 style={{
            //                     height:150, 
            //                     width:150, 
            //                     borderColor:"#dcdcdc",
            //                     borderWidth:1.5,
            //                     borderRadius:12,
                          
            //                     justifyContent:"center",
            //                     alignItems:"center"
            //                 }}
            //             >
                             
            //             </View>
            //             <Text style={{fontSize:20, fontWeight:"bold"}} >Student</Text>
            //             </View>
            //         </TouchableNativeFeedback>
            //         <Text style={{fontSize:18}}>or</Text>
            //         <TouchableNativeFeedback
            //             onPress={()=>this.props.navigation.navigate('Guest')}
            //         >
            //             <View
            //                  style={{
            //                     margin:20,
            //                     marginLeft:30,
            //                     marginRight:10,
            //                     justifyContent:"center",
            //                     alignItems:"center"
            //                  }}
                        
            //             >
            //             <View 
            //                 style={{
            //                     height:150, 
            //                     width:150, 
            //                     borderColor:"#dcdcdc",
            //                     borderWidth:1.5,
            //                     borderRadius:12,
            //                     justifyContent:"center",
            //                     alignItems:"center"
                               
            //                 }}
            //             >
                             
            //             </View>
            //             <Text style={{fontSize:20, fontWeight:"bold"}} >Guest</Text>

            //             </View>
            //         </TouchableNativeFeedback>
            //     </View>
            //     </View>
            // </View>
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
                                 onPress={()=>{this.setState({modalVisible:false}),this.props.navigation.navigate('Home')}}
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


