import { StyleSheet } from "react-native";

const theme = {
  white: "#eee",
  black: "#333",
  background: "#48a06e"
};

const CricketeerStyles = StyleSheet.create({
  board: {
    flex: 1,
    backgroundColor: theme.background
  },
  title: {
    fontSize: 36,
    fontWeight: "400",
    letterSpacing: 2,
    marginTop: 10,
    textAlign: "center",
    color: theme.white,
    fontStyle: "italic"
  }
});
export { CricketeerStyles };

const GameBoardStyles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: theme.white,
    borderWidth: 2,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 6
  },
  main: {
    flex: 1,
    display: "flex",
    flexDirection: "row"
  }
});
export { GameBoardStyles };

const PlayerInitialsStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  text: {
    fontSize: 20,
    fontStyle: "italic",
    color: theme.white,
    margin: 8
  }
});
export { PlayerInitialsStyles };

const ScoreStyles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1
  },
  score: {
    color: theme.white,
    fontSize: 24,
    textAlign: "center"
  }
});
export { ScoreStyles };
