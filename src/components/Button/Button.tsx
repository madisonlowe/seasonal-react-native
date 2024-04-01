import { Pressable, Text, StyleSheet } from "react-native";

interface buttonProps {
  title: string;
  onPress: () => void;
}

export default function Button({ title, onPress }: buttonProps) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 50,
    backgroundColor: "#296243",
    borderRadius: 4,
  },
  text: {
    textAlign: "center",
    lineHeight: 50,
    fontSize: 16,
    fontWeight: "600",
    color: "#f2f2f2",
  },
});
