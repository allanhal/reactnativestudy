import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, ScrollView, SectionList, Alert, Button, Text } from 'react-native';
import { Container, Header, Content } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import InsideComponent from './InsideComponent'
import NativeBase from './NativeBase'

type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super()
    this.state = {
      size1: 1,
      size2: 1,
      size3: 1,
      volume: 1,
      sumElements: [],
      sumValue: []
    }
  }

  resetState() {
    this.setState({
      size1: 1,
      size2: 1,
      size3: 1,
      volume: 1,
      sumElements: [],
      sumValue: []
    })
  }

  resetSumState() {
    this.setState({
      sumElements: [],
      sumValue: []
    })
  }

  resetSizes() {
    this.setState({
      sumElements: [],
      sumValue: []
    })
  }

  addVolumeToSum() {
    var newSumElementsValue = [];
    this.state.sumElements.forEach(sumElement => {
      newSumElementsValue.push(sumElement)
    });
    newSumElementsValue.push(this.state.volume);
    var newSumValue = 0
    newSumElementsValue.forEach(sunElement => {
      newSumValue += sunElement;
    });

    this.setState({
      sumElements: newSumElementsValue,
      sumValue: newSumValue
    })
  }

  parseSumValues() {
    var toReturn = ''
    this.state.sumElements.forEach((element, idx, array) => {
      toReturn += element
      if (idx !== array.length - 1) {
        toReturn += ' + '
      }
    });
    return toReturn
  }

  updateVolume() {
    this.setState({
      volume: this.state.size1 * this.state.size2 * this.state.size3
    })
  }

  render1() {
    return (
      // <NativeBase></NativeBase>
      <Container>
        <Header />
        <Grid>
          <Col style={{ backgroundColor: '#635DB7', height: 200 }}>
            <Button light><Text> Light </Text></Button>
            <Button primary><Text> Primary </Text></Button>
            <Button success><Text> Success </Text></Button>
            <Button info><Text> Info </Text></Button>
          </Col>
          <Col style={{ backgroundColor: '#00CE9F', height: 200 }}>
            <Button warning><Text> Warning </Text></Button>
            <Button danger><Text> Danger </Text></Button>
            <Button dark><Text> Dark </Text></Button>
          </Col>
        </Grid>
      </Container>


      // <Container>
      //   <Header />
      //   <Content>
      //     <Button light><Text> Light </Text></Button>
      //     <Button primary><Text> Primary </Text></Button>
      //     <Button success><Text> Success </Text></Button>
      //     <Button info><Text> Info </Text></Button>
      //     <Button warning><Text> Warning </Text></Button>
      //     <Button danger><Text> Danger </Text></Button>
      //     <Button dark><Text> Dark </Text></Button>
      //   </Content>
      // </Container>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Soma {this.parseSumValues()} = {this.state.sumValue}</Text>
          <View style={styles.wrapper}>
            <Button
              onPress={() => {
                this.resetSumState()
              }}
              title="Limpar"
            />
            <Button
              onPress={() => {
                this.addVolumeToSum()
              }}
              title="Adicionar"
            />
          </View>
        </View>
        <View style={styles.wrapper}>
          <Button
            onPress={() => {
              this.setState({ size1: this.state.size1 - 1 }, () => this.updateVolume())
            }}
            title="-"
          />
          <Text>{this.state.size1}</Text>
          <Button
            style={styles.bigText}
            onPress={() => {
              this.setState({ size1: this.state.size1 + 1 }, () => this.updateVolume())
            }}
            title="+"
          />
        </View>

        <View style={styles.wrapper}>
          <Button
            onPress={() => {
              this.setState({ size2: this.state.size2 - 1 }, () => this.updateVolume())
            }}
            title="-"
          />
          <Text>{this.state.size2}</Text>
          <Button
            onPress={() => {
              this.setState({ size2: this.state.size2 + 1 }, () => this.updateVolume())
            }}
            title="+"
          />
        </View>
        <View style={styles.wrapper}>
          <Button
            onPress={() => {
              this.setState({ size3: this.state.size3 - 1 }, () => this.updateVolume())
            }}
            title="-"
          />
          <Text>{this.state.size3}</Text>
          <Button
            onPress={() => {
              this.setState({ size3: this.state.size3 + 1 }, () => this.updateVolume())
            }}
            title="+"
          />
        </View>
        <View>
          <Text>Volume = {this.state.volume}</Text>
          <Button
            onPress={() => {
              this.resetSizes()
            }}
            title="Limpar"
          />
        </View>
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
  wrapper: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  bigText: {
    fontSize: 100,
  },
});