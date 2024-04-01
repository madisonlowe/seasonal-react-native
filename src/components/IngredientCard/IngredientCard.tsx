import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  Pressable,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "src/router";

interface IngredientCardProps {
  children: string;
  imageUrl: string;
}

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

export default function IngredientCard({
  children,
  imageUrl,
}: IngredientCardProps) {
  return (
    <Pressable onPress={() => console.log("click")} style={styles.card}>
      <Image
        style={styles.image}
        source={{ uri: imageUrl }}
        resizeMode="contain"
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </Pressable>
  );
}

// parent
//   imagediv
//   textdiv

const deviceWidth = Math.round(Dimensions.get("window").width);

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
    margin: 20,
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

// in react native, children don't inherit parent styling :vomit:
// explains using styled components or a builder or smth ig
