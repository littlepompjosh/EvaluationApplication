import React from 'react';
import { Ionicons } from 'react-native-ionicons';
import { StyleSheet, View, Text, Image, I18nManager, Button } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Rating, AirbnbRating } from 'react-native-ratings';
import {addNewData} from '../function'
import Check from '../assets/tick.png'
import CustomRating from './customRating'

I18nManager.forceRTL(false);


var final_answer = [];


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        activePage : 0,
        nullPage : 0,
        data : [],
        val:0
     }
  }

  componentDidMount = () => {

    slides.forEach(item => {
      answers.push(0);
    })

    this.setState({data : this.props.navigation.state.params.qData})
    // console.log(this.props.navigation.state.params.qData)

  }

  _renderItem = ({ item, dimensions }) => (
    <View
      style={[{

          flex: 1,
          width: dimensions.width,
          backgroundColor : item.get('colors')

      },styles.mainContent]}
    >

      <View style={{width : dimensions.width,flex : 4,justifyContent:"flex-start",backgroundColor:"#fff" }}>
        <View style={{height:80, justifyContent:"flex-end", paddingLeft:15, borderBottomColor:"#dcdcdc", borderBottomWidth:1.5}}>
          <Text style={{fontSize:25, fontWeight:"bold"}}>Expo Evaluation</Text>
        </View>
          <Text style={styles.title}>{item.get('question')}</Text>
        {/* <Text style={styles.text}>{item.text}</Text> */}
      </View>
      {/* <Button title="TEST" onPress={() => console.log(item.id)} /> */}
      <View style={{flex:1,justifyContent:"flex-start",alignItems:"flex-start", backgroundColor:"#fff"}}>
        {/* <Rating
            type='star'
            showRating
            ratingTextColor= "#dcdcdc"
            style={{ paddingVertical: 10, backgroundColor: '#fff', width : dimensions.width}}
            ratingBackgroundColor='#dcdcdc'
            ratingColor = "blue"
            ratingCount = {5}
            startingValue = {0}
            fractions = {1}
            onFinishRating = {(e) => this.updateRecord(e, item.id, item.get('question'))}
          /> */}
          <CustomRating id={item.id} question={item.get('question')} upDate={this.updateRecord}/>
        </View>
    </View>
  );

  updateRecord = (value, id, q) =>{
    // console.log(value, id ,q)

    answers[this.state.activePage] = value;
    this.setState({val:value})
    final_answer.push({
      id : id,
      question : q,
      answer : value
    })
  }

  checkAnswer = (page) => {
    // console.log(answers)
    if(answers[this.state.activePage] === 0 | answers[this.state.activePage] === undefined){
      this.refSlider.goToSlide(page - 1)
      this.setState({activePage : page - 1})
        // console.log(answers , '  -- ' + page);
        // console.log(this.state.activePage)
    }
  }

  addToDatabase = () => {
    // console.log(final_answer)
    addNewData(final_answer).then( res => {

      final_answer = [];
      answers = [];
      // console.log(res)
      if(res.status === true){
        
        this.props.navigation.navigate('Thanks')
      }else{

        ToastAndroid.showWithGravity(
          res.error,
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        )
      }
    })
  }

  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
       <Image 
        style={{width:30, height:30,margin:20}} 
         source={Check}
       />
      </View>
    );
  };

  render() {
    return (
      <>
      {/* <Button title="TEST" onPress={() => this.refSlider.goToSlide(2)} /> */}
      <AppIntroSlider
        slides={this.state.data}
        ref={component => {this.refSlider = component}}
        renderItem={this._renderItem}
        onDone={() =>this.addToDatabase()}

        renderDoneButton={this._renderDoneButton}
        onSlideChange ={(e) => {this.setState({activePage : e}), this.checkAnswer(e)}}
        showNextButton = {false}

        // bottomButton

        // showPrevButton
        // showSkipButton
        hideNextButton={true}
        // hideDoneButton
        // onSkip={() => console.log("skipped")}
      />
      </>
    );
  }
}

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 320,
    height: 320,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    color: '#000',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginTop:100,
    textDecorationStyle:"solid"
  },
  buttonCircle: {
    width: 50,
    height: 50,
    backgroundColor: 'rgba(0, 0, 0, .1)',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


const slides = [
  {
    key: '1',
    question: 'How satisfied are you in the STI College Marikina Exposition 2020 in terms of accomodation?',
    icon: 'ios-images',
    colors: '#1abc9c',
  }
];

var answers = [

]
