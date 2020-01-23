import React from 'react';
import { Ionicons } from 'react-native-ionicons';
import { StyleSheet, View, Text, Image, I18nManager } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Rating, AirbnbRating } from 'react-native-ratings';
import TEST_IMG from '../assets/test.png'

I18nManager.forceRTL(false);

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
    colors: '#63E2FF',
  },
  {
    key: '2',
    title: 'How satisfied are you in the STI College Marikina Exposition 2020 in terms of the venue?',
    icon: 'ios-options',
    colors: '#A3A1FF',
  },
  {
    key: '3',
    title: 'How satisfied are you in the STI College Marikina Exposition 2020 in terms of the date and time?',
    icon: 'ios-beer',
    colors: '#29ABE2',
  },
  {
    key: '4',
    title: 'How satisfied are you in the STI College Marikina Exposition 2020 in terms of the speakers?',
    icon: 'ios-beer',
    colors: '#57a0be',
  },
  {
    key: '5',
    title: 'How satisfied are you in the STI College Marikina Exposition 2020 in terms of the ......',
    icon: 'ios-beer',
    colors: '#ffb400',
  },
];

export default class App extends React.Component {
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
          fractions = {1}
        />
    </View>
  );

  render() {
    return (
      <AppIntroSlider
        slides={slides}
        renderItem={this._renderItem}
        onDone={() => this.props.navigation.navigate('Home')}
        // bottomButton
        // showPrevButton
        // showSkipButton
        // hideNextButton
        // hideDoneButton
        // onSkip={() => console.log("skipped")}
      />
    );
  }
}