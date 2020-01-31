import React, { Component } from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet, Dimensions} from 'react-native'
import Pain from './emojis/pain.png'
import Sad from './emojis/sad.png'
import Meh from './emojis/meh.png'
import Smile from './emojis/smile.png'
import Laught from './emojis/laught.png'



class CustomRating extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            value:0,
            icon1:false,

            icon2:false,

            icon3:false,

            icon5:false,

            icon1:false,
         }
    }

    componentDidMount = () =>{
        
    }

    // this.props.upDate(this.state.value, this.props.id, this.props.question)


    upDate=(value)=>{
        this.props.upDate(value, this.props.id, this.props.question)
    }
  
    render() { 
       
        return ( 
            <View style={styles.main}>
                <View style={styles.ratingContainer}>
                    <TouchableOpacity 
                        onPress={()=>
                            {
                                this.setState({
                                    icon1:true,icon2:false, icon3:false, icon4:false, icon5:false,
                                }),
                                this.upDate(1)}
                        } 
                        style={styles.iconContainer}>
                            <Image 
                                style={[
                                    styles.img ,
                                    this.state.icon1 === true ?
                                    {width:40, height:40,backgroundColor:"#eb4d4b"}
                                    :
                                    {width:30, height:30,}]} 
                                source={Pain}
                                    />
                    </TouchableOpacity>
                    <TouchableOpacity 
                            onPress={()=>
                                {
                                    this.setState({
                                        icon1:false,icon2:true, icon3:false, icon4:false, icon5:false, 
                                    }),
                                    this.upDate(2)}
                            } 
                            style={styles.iconContainer}>
                            <Image 
                                style={[
                                    styles.img ,
                                    this.state.icon2 === true ?
                                    {width:40, height:40,backgroundColor:"#f9ca24"}
                                    :
                                    {width:30, height:30,}]} 
                                source={Sad}
                                    />
                    </TouchableOpacity>
                    <TouchableOpacity 
                               onPress={()=>
                                {
                                    this.setState({
                                        icon1:false,icon2:false, icon3:true, icon4:false, icon5:false, 
                                    }),
                                    this.upDate(3)}
                            } 
                            style={styles.iconContainer}>
                            <Image 
                                style={[
                                    styles.img ,
                                    this.state.icon3 === true ?
                                    {width:40, height:40,backgroundColor:"#f9ca24"}
                                    :
                                    {width:30, height:30,}]} 
                                source={Meh}
                                    />
                    </TouchableOpacity>
                    <TouchableOpacity 
                           onPress={()=>
                            {
                                this.setState({
                                    icon1:false,icon2:false, icon3:false, icon4:true, icon5:false, 
                                }),
                                this.upDate(4)}
                        } 
                        style={styles.iconContainer}>
                            <Image 
                                style={[
                                    styles.img ,
                                    this.state.icon4 === true ?
                                    {width:40, height:40,backgroundColor:"#f9ca24"}
                                    :
                                    {width:30, height:30,}]} 
                                source={Smile}
                                    />
                    </TouchableOpacity>
                    <TouchableOpacity 
                           onPress={()=>
                            {
                                this.setState({
                                    icon1:false,icon2:false, icon3:false, icon4:false, icon5:true, 
                                }),
                                this.upDate(5)}
                        } 
                        style={styles.iconContainer}>
                            <Image 
                                style={[
                                    styles.img ,
                                    this.state.icon5 === true ?
                                    {width:40, height:40,backgroundColor:"#f9ca24"}
                                    :
                                    {width:30, height:30,}]} 
                                source={Laught}
                                    />
                    </TouchableOpacity>
                </View>
                <View>
                                <Text style={{ fontSize:18}}>{this.state.value}/5</Text>
                </View>
            </View>
         );
    }
}
 
export default CustomRating;

var width = Dimensions.get('window').width; 

const styles =StyleSheet.create(
    {
        main:{
            width:width,
            paddingTop:15,
            backgroundColor:"#dcdcdc",
            flex: 1,
            justifyContent:"flex-start",
            alignItems:"center",
        },
        ratingContainer:{
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center",
            width:width/2,
        },
        iconContainer:{
            justifyContent:"center",
            alignItems:"center",
            width:width /7,
            height:50
        },
        img:{
            borderRadius:50
        }
      
    }
)