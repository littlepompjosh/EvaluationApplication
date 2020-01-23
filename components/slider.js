import React from 'react';
import { Ionicons } from 'react-native-ionicons';
import { StyleSheet, View, Text, Image, I18nManager } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

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
  },
});

const slides = [
  {
    key: '1',
    title: 'How satisfied are you in exposition in 2020 in terms of accomodation?',
    text: 'React-native-app-intro-slider is easy to setup with a small footprint and no dependencies. And it comes with good default layouts!',
    icon: 'ios-images',
    colors: ['#63E2FF', '#B066FE'],
  },
  {
    key: '2',
    title: 'Super customizable',
    text:
      'The component is also super customizable, so you can adapt it to cover your needs and wants.',
    icon: 'ios-options',
    colors: ['#A3A1FF', '#3A3897'],
  },
  {
    key: '3',
    title: 'No need to buy me beer',
    text: 'Usage is all free',
    icon: 'ios-beer',
    colors: ['#29ABE2', '#4F00BC'],
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
          backgroundColor : item.colors[0]
        },
      ]}    
    >
      
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </View>
  );

  render() {
    return (
      <AppIntroSlider
        slides={slides}
        renderItem={this._renderItem}
        onDone={() => this.props.navigation.navigate('Home', {name : 'Regie'})}
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