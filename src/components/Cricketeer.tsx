import React, { Component } from "react";
import { Text, View } from "react-native";
import { CricketeerStyles as styles } from "../utilities/styles";
import GameBoard from "./GameBoard";

interface Istate {
  moves: Array<string>;
}

export default class Cricketeer extends Component<{}, Istate> {
  state = {
    moves: []
  };

  render() {
    return (
      <View style={styles.board}>
        <Text style={styles.title}>Cricketeer</Text>
        <GameBoard moves={this.state.moves} />
        <View style={{ height: 40 }} />
      </View>
    );
  }
}
