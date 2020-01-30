import React from 'react';
import { Ionicons } from 'react-native-ionicons';
import { StyleSheet, View, Text, Image, I18nManager, Button } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

import { Rating, AirbnbRating } from 'react-native-ratings';
import {addNewData} from '../function'

I18nManager.forceRTL(false);


var final_answer = [];


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        activePage : 0,
        nullPage : 0,
        data : []
     }
  }

  componentDidMount = () => {

    slides.forEach(item => {
      answers.push(0);
    })

    this.setState({data : this.props.navigation.state.params.qData})
    console.log(this.props.navigation.state.params.qData)

  }

  _renderItem = ({ item, dimensions }) => (
    <View
      style={[{

          flex: 1,
          width: dimensions.width,
          backgroundColor : item.get('colors')

      },styles.mainContent]}
    >

      <View style={{width : dimensions.width, flex : 3,justifyContent:"center",}}>
          <Text style={styles.title}>{item.get('question')}</Text>
        {/* <Text style={styles.text}>{item.text}</Text> */}
      </View>
      {/* <Button title="TEST" onPress={() => console.log(item.id)} /> */}
      <View style={{flex:1}}>
        <Rating
            type='star'
            showRating
            style={{ paddingVertical: 10, backgroundColor: '#fff', width : dimensions.width}}
            ratingBackgroundColor='#fafafa'
            ratingColor = "orange"
            ratingCount = {5}
            startingValue = {0}
            //fractions = {1}
            onFinishRating = {(e) => this.updateRecord(e, item.id, item.get('question'))}
          />
        </View>
    </View>
  );

  updateRecord = (e, id, q) =>{
    answers[this.state.activePage] = e;
    final_answer.push({
      id : id,
      question : q,
      answer : e
    })
  }

  checkAnswer = (page) => {

    if(answers[this.state.activePage] === 0){
      this.refSlider.goToSlide(page - 1)
      this.setState({activePage : page - 1})
        console.log(answers , '  -- ' + page);
        console.log(this.state.activePage)
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

  render() {
    return (
      <>
      {/* <Button title="TEST" onPress={() => this.refSlider.goToSlide(2)} /> */}
      <AppIntroSlider
        slides={this.state.data}
        ref={component => {this.refSlider = component}}
        renderItem={this._renderItem}
        onDone={() => this.addToDatabase()}
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
    justifyContent: 'flex-start',
  },
  image: {
    width: 320,
    height: 320,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  title: {
    marginTop : 150,
    margin : 30,
    fontSize: 25,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
    alignItems : 'flex-start'
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
