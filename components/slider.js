import React from 'react';
import { Ionicons } from 'react-native-ionicons';
import { StyleSheet, View, Text, Image, I18nManager, Button } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

import { Rating, AirbnbRating } from 'react-native-ratings';
import TEST_IMG from '../assets/test.png'

I18nManager.forceRTL(false);


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
        activePage : 0,
        nullPage : 0
     }
  }

  componentDidMount = () => {

    slides.forEach(item => {
      answers.push(0);
    })

    console.log(answers)

  }
  
  _renderItem = ({ item, dimensions }) => (
    <View
      style={[
        styles.mainContent,
        {
          flex: 1,
          paddingTop: item.topSpacer,
          paddingBottom: item.bottomSpacer,
          width: dimensions.width,
          backgroundColor : item.colors
        },
      ]}    
    >
      
      <View style={{width : dimensions.width, flex : 1}}>
        <Text style={styles.title}>{item.title}</Text>
        {/* <Text style={styles.text}>{item.text}</Text> */}
      </View>
      <Rating
          type='star'
          showRating
          style={{ paddingVertical: 10, backgroundColor: '#fff', width : dimensions.width, marginBottom: 200}}
          ratingBackgroundColor='#fafafa'
          ratingColor = "orange"
          ratingCount = {5}
          startingValue = {0}
          //fractions = {1}
          onFinishRating = {(e) => this.updateRecord(e)}
        />
    </View>
  );
  
  updateRecord = (e) =>{
    answers[this.state.activePage] = e;
  }

  checkAnswer = (page) => {
   
    if(answers[this.state.activePage] === 0){
      this.refSlider.goToSlide(page - 1)
      this.setState({activePage : page - 1})
        console.log(answers , '  -- ' + page);
        console.log(this.state.activePage)
    }
  }


  render() {
    return (
      <>
      {/* <Button title="TEST" onPress={() => this.refSlider.goToSlide(2)} /> */}
      <AppIntroSlider
        slides={slides}
        ref={component => {this.refSlider = component}}
        renderItem={this._renderItem}
        onDone={() => this.props.navigation.navigate('Thanks')}
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
    title: 'How satisfied are you in the STI College Marikina Exposition 2020 in terms of accomodation?',
    icon: 'ios-images',
    colors: '#1abc9c',
  },
  {
    key: '2',
    title: 'How satisfied are you in the STI College Marikina Exposition 2020 in terms of the venue?',
    icon: 'ios-options',
    colors: '#16a085',
  },
  {
    key: '3',
    title: 'How satisfied are you in the STI College Marikina Exposition 2020 in terms of the date and time?',
    icon: 'ios-beer',
    colors: '#2ecc71',
  },
  {
    key: '4',
    title: 'How satisfied are you in the STI College Marikina Exposition 2020 in terms of the speakers?',
    icon: 'ios-beer',
    colors: '#27ae60',
  },
  {
    key: '5',
    title: 'How satisfied are you in the STI College Marikina Exposition 2020 in terms of the ......',
    icon: 'ios-beer',
    colors: '#3498db',
  },
  {
    key: '6',
    title: 'How satisfied are you in the STI College Marikina Exposition 2020 in terms of the ......',
    icon: 'ios-beer',
    colors: '#2980b9',
  },
  {
    key: '7',
    title: 'How satisfied are you in the STI College Marikina Exposition 2020 in terms of the ......',
    icon: 'ios-beer',
    colors: '#9b59b6',
  },
  {
    key: '8',
    title: 'How satisfied are you in the STI College Marikina Exposition 2020 in terms of the Students Products?',
    icon: 'ios-beer',
    colors: '#8e44ad',
  },
  {
    key: '9',
    title: 'How satisfied are you in the STI College Marikina Exposition 2020 in terms of the Students Booth Presentation?',
    icon: 'ios-beer',
    colors: '#34495e',
  },
  {
    key: '10',
    title: 'How satisfied are you with the overall event?',
    icon: 'ios-beer',
    colors: '#2c3e50',
  },
];

const answers = [

]
