import React from "react";
import { Text, View } from "react-native";
import { GameBoardStyles as styles } from "../utilities/styles";
import PlayerInitials from "./PlayerInitials";

interface Iprops {
  moves: Array<string>;
}

const GameBoard = (props: Iprops) => (
  <View style={styles.container}>
    <Text>{props.moves}</Text>
    <PlayerInitials playerOne="LL" playerTwo="JT" />
  </View>
);

export default GameBoard;
