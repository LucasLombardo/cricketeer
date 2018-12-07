import React from "react";
import { Text, View } from "react-native";
import { GameBoardStyles as styles } from "../utilities/styles";
import PlayerInitials from "./PlayerInitials";
import Score from "./Score";

interface Iprops {
  moves: Array<string>;
}

const GameBoard = (props: Iprops) => (
  <View style={styles.container}>
    <PlayerInitials playerOne="LL" playerTwo="JT" />
    <Text>{props.moves}</Text>
    <View style={styles.main}>
      <Score score={23} />
      <Score score={40} />
    </View>
  </View>
);

export default GameBoard;
