import { StyleSheet, View, Text } from "react-native";

interface BoxProps {
  children: string;
}

const Box = ({ children }: BoxProps) => {
  return (
    <View style={styles.box}>
      <Text style={styles.boxText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 300,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgray",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "darkslategray",
    margin: 10,
  },
  boxText: {
    color: "darkslategray",
    fontWeight: "bold",
  },
});

export default Box;
