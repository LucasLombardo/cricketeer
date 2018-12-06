import React, { Component } from "react";
import { Text, View } from "react-native";
import { PlayerInitialsStyles as styles } from "../utilities/styles";

interface Iprops {
  playerOne: String;
  playerTwo: String;
}

export default class PlayerInitials extends Component<Iprops> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.playerOne}</Text>
        <Text style={styles.text}>{this.props.playerTwo}</Text>
      </View>
    );
  }
}
