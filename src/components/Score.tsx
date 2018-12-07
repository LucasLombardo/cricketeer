import React from "react";
import { Text, View } from "react-native";
import { ScoreStyles as styles } from "../utilities/styles";

interface Iprops {
  score: number;
}

const Score = ({ score }: Iprops) => (
  <View style={styles.container}>
    <Text style={styles.score}>{score}</Text>
  </View>
);

export default Score;
