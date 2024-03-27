import { StyleSheet, View, Text } from "react-native";

interface IngredientCardProps {
  children: string;
}

export default function IngredientCard({ children }: IngredientCardProps) {
  return (
    <View style={styles.card}>
      <Text>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgray",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "darkslategray",
    borderRadius: 5,
    margin: 10,
  },
});
