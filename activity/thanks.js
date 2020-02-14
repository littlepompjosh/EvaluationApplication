import React from 'react';
import { Button, View, Text, Image, Dimensions, TouchableOpacity, AsyncStorage} from 'react-native';
import ThanksImg from '../assets/thanks.png';
import Instruct from '../components/instructions';
import {addNewData} from '../function'

class Thanks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount = () => {

        AsyncStorage.getItem('STUDENT_ID', (err, result) => {

            if(result !== null){

                addNewData(this.props.navigation.state.params, result).then( res => {
                
                        if(res.status === true){
                        console.log(res)
                        AsyncStorage.setItem('STUDENT_ID', null);
                        // this.props.navigation.navigate('Start')
                        }else{
                            ToastAndroid.showWithGravity(
                                res.error,
                                ToastAndroid.SHORT,
                                ToastAndroid.CENTER,
                            )
                        }
                })

            }
        });

        AsyncStorage.getItem('MOBILE_NUMBER', (err, result) => {

            if(result !== null){

                addNewData(this.props.navigation.state.params, null, result).then( res => {
                
                        if(res.status === true){
                        console.log(res)
                        AsyncStorage.setItem('MOBILE_NUMBER', null);
                        // this.props.navigation.navigate('Start')
                        }else{
                            ToastAndroid.showWithGravity(
                                res.error,
                                ToastAndroid.SHORT,
                                ToastAndroid.CENTER,
                            )
                        }
                })

            }
        });

    }

    render() { 

        var width = Dimensions.get('window').width; 
        return (
            <View style={{flex : 1, backgroundColor : '#fff', flexDirection: 'column', justifyContent : 'center', alignItems : 'center'}}>
                <View style={{flex:5, justifyContent:"center", alignItems:"center"}}>
                <View>
                    <Image source={require('../assets/like.png')} style={{height : 150, width: 150, marginBottom: 30}}/>
                </View>
                <Text style={{fontSize : 20, marginBottom : 60, fontWeight:"800"}}>Thank You for Answering!</Text>
                
                </View>
                {/* <Button color="#696464" title="Return" onPress={() => this.props.navigation.navigate('Home')}/> */}
                <View style={{flex:1}}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Start')}
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