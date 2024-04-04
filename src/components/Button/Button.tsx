import { Pressable, Text, StyleSheet } from "react-native";

interface ButtonProps {
  title: string;
  onPress?: () => void;
  isPill?: boolean;
}

export default function Button({
  title,
  onPress,
  isPill,
}: Readonly<ButtonProps>) {
  return (
    <Pressable onPress={onPress} style={isPill ? styles.pill : styles.button}>
      <Text style={isPill ? styles.pillText : styles.text}>{title}</Text>
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
  pill: {
    height: 24,
    paddingHorizontal: 12,
    backgroundColor: "#296243",
    borderRadius: 4,
  },
  pillText: {
    textAlign: "center",
    lineHeight: 24,
    fontSize: 14,
    fontWeight: "600",
    color: "#f2f2f2",
  },
});
