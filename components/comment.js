import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Button,
    TouchableOpacityBase,
    ScrollView
} from 'react-native'


class Suggest extends React.Component{

    constructor (props) {
        super(props);
        this.state = {
            answers: this.props.navigation.state.params
        }
    }

    createObject = () => {
        var answer = this.state.answers;
        answer.feedback = this.state.feedValue

        // console.log('FEEDBACK SCREEN ===> ', answer)
        this.props.navigation.navigate('Thanks', answer)
    }


    render(){
        return(
            <View style={{padding:30}}>
                <Text style={{fontSize: 15, fontWeight: 'bold' }}> Thank you for participating, if you have any comments and suggestions
                    please tell us!
                </Text>
                <View 
                    style={{
                        marginTop: 20,
                        minHeight: 150, 
                        maxHeight: 300,
                        overflow: 'scroll',
                        width: '100%', 
                        padding:5, 
                        overflow: 'scroll',
                        borderRadius: 12,
                        borderColor: '#dcdcdc',
                        borderWidth: 2
                    }}
                > 
                    <ScrollView>

                        <TextInput
                            onChangeText = {(text) => this.setState({feedValue : text})}
                            multiline = {true}
                        />
                    </ScrollView>
                </View>
                <TouchableOpacity 
                        onPress={()=>{this.setState({modalVisible:false}), this.createObject()}}
                >
                    <View
                        style={{
                            marginTop:20,
                            height:50, 
                            width:"100%",
                            backgroundColor:"#3498db",
                            borderRadius:50,
                            justifyContent:"center",
                            alignItems:"center"
                        }}
                    >
                        <Text style={{color:"#fff"}}> Submit </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
export default Suggest;

