import React from 'react'
import {
    View,
    Text,
    TouchableNativeFeedback,
    Image,
    Modal,
    TextInput,
    TouchableOpacity,
    AsyncStorage
} from 'react-native'
import St from '../assets/student.png'

import G from '../assets/guest-list.png'

class Start extends React.Component{
    state = {
        modalVisible: false,
      };

      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }

    render(){
        return(
            <View style={{flex:1, padding:30}}>
                <View style={{flex:1,alignItems:"center", justifyContent:"flex-end"}}>
                    <Text style={{fontSize:35, fontWeight:'bold'}}> Welcome </Text>
                   
                </View>
                <View
                     style={{
                        paddingTop:50,
                        flex:2,
                        alignItems:"center",
                        justifyContent:"flex-start"
                    }}
                >
                
                <Text style={{fontSize:18, }}> Are you a? </Text>
                <View style={{
                        flexDirection:"row", 
                        justifyContent:"space-around",
                         alignItems:"center" }}>
                    <TouchableNativeFeedback
                        onPress={() => {
                            this.setModalVisible(true);
                          }}
                    > 
                        <View 
                            style={{
                                justifyContent:"center",
                                alignItems:"center",
                                margin:20,
                                marginRight:30,
                                marginLeft:10,
                            }}
                        >
                        <View 
                            style={{
                                height:150, 
                                width:150, 
                                borderColor:"#dcdcdc",
                                borderWidth:1.5,
                                borderRadius:12,
                          
                                justifyContent:"center",
                                alignItems:"center"
                            }}
                        >
                            <Image 
                                style={{maxWidth:130,resizeMode:"contain", height:130}}
                                source={St}
                             />
                             
                        </View>
                        <Text style={{fontSize:20, fontWeight:"bold"}} >Student</Text>
                        </View>
                    </TouchableNativeFeedback>
                    {/* <Text style={{fontSize:18, margin: 25}}>or</Text> */}
                    <TouchableNativeFeedback
                        onPress={()=>this.props.navigation.navigate('Guest')}
                    >
                        <View
                             style={{
                                margin:20,
                                marginLeft:30,
                                marginRight:10,
                                justifyContent:"center",
                                alignItems:"center"
                             }}
                        
                        >
                        <View 
                            style={{
                                height:150, 
                                width:150, 
                                borderColor:"#dcdcdc",
                                borderWidth:1.5,
                                borderRadius:12,
                                justifyContent:"center",
                                alignItems:"center"
                               
                            }}
                        >
                             <Image 
                                style={{maxWidth:130, resizeMode:"contain", height:130}}
                                source={G}
                             />
                             
                        </View>
                        <Text style={{fontSize:20, fontWeight:"bold"}} >Guest</Text>

                        </View>
                    </TouchableNativeFeedback>
                </View>
                </View>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    style={{
                        height:300,
                        width:300,
                        borderRadius:50
                    }}
                    onRequestClose={() =>this.setState({modalVisible:false}) }
                  >
                      <View style={{flex:1, paddingTop:150, padding:50 }}>
                            <Text>Enter Student ID:</Text>
                            <TextInput
                                onChangeText={(text) => this.setState({input: text})}
                                style={{borderColor:"#dcdcdc", borderWidth:1.5, marginTop:5, borderRadius:12, paddingLeft:10}}
                                keyboardType= {'numeric'}
                            />
                            <TouchableOpacity 
                                 onPress={()=>{AsyncStorage.setItem('STUDENT_ID', this.state.input),this.setState({modalVisible:false}),this.props.navigation.navigate('Instruct', {studendId : this.state.input})}}
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

                </Modal>

            </View>
        );
    }
}
export default Start;