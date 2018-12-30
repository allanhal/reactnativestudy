import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView, SectionList } from 'react-native';
import InsideComponent from './InsideComponent'


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        {/* <InsideComponent></InsideComponent> */}
        <Text style={styles.welcome}>Gosto de você!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 100,
    textAlign: 'center',
    margin: 10,
  },
});