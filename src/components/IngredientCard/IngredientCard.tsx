import { StyleSheet, View, Text, Image, Pressable } from "react-native";

interface IngredientCardProps {
  children: string;
  imageUrl: string;
  onPress: () => void;
}

export default function IngredientCard({
  children,
  imageUrl,
  onPress,
}: Readonly<IngredientCardProps>) {
  return (
    <Pressable onPress={onPress} style={styles.card}>
      <Image
        style={styles.image}
        source={{ uri: imageUrl }}
        resizeMode="center"
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 300,
    width: 300,
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#296243",
    borderRadius: 5,
    margin: 10,
    display: "flex",
    flexDirection: "column",
  },
  image: {
    width: 298,
    borderRadius: 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    flex: 3,
    backgroundColor: "#fff",
  },
  textContainer: {
    flex: 1,
    width: 298,
    justifyContent: "center",
    backgroundColor: "#296243",
  },
  text: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "600",
    color: "#f2f2f2",
  },
});
