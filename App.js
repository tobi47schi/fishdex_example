import React, { Component } from 'react';
import { AppRegistry, Image, Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';

export default class Fish extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {

    let pic = {
      uri: 'https://rp-online.de/imgs/32/1/2/1/0/8/8/5/7/tok_c3743b467ddf11cfcf2d3c0cfab14e69/w606_h510_x303_y255_eca3a024aef016d8.jpg'
    };
    return (
      <View style={styles.viewStyling}>
        <Image source={pic} style={{width: 500, height: 400}}/>
        <Text style={styles.titleText}>Fishdex</Text>
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.loginName} {this.state.password}
        </Text>

        <TextInput
          style={{height: 40}}
          placeholder="Login Name"
          onChangeText={(loginName) => this.setState({loginName})}
        />
        <TextInput
          style={{height: 40}}
          placeholder="Password"
          onChangeText={(password) => this.setState({password})}
        />

        <Button
          onPress={() => {
            Alert.alert('LoginName: ', this.state.loginName);
          }}
          title="Login"
        />

        <Button
          onPress={() => {
            Alert.alert('Du Willst dich registrieren!');
          }}
          title="Registrieren"
        />

        <Text style={styles.baseText}>powered by Tobi</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
viewStyling:{
  //Styling View
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'Futura',
  },
  loginText: {
    fontSize : 30,
    color : 'blue',
    fontFamily : 'Futura'
  },
  signUpText: {
    fontSize : 20,
    color : 'blue',
    fontFamily : 'Futura'
  }
});

// skip this line if using Create React Native App
//AppRegistry.registerComponent('AwesomeProject', () => Fish);
