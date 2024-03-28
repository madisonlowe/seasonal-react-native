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
}

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

export default function IngredientCard({ children }: IngredientCardProps) {
  return (
    <Pressable onPress={() => console.log("click")} style={styles.card}>
      <Image
        style={styles.image}
        source={require("assets/emergencyJpeg.jpg")}
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
    height: deviceWidth - 150,
    width: deviceWidth - 100,
    alignItems: "center",
    backgroundColor: "#296243",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#296243",
    borderRadius: 5,
    margin: 10,
    display: "flex",
    flexDirection: "column",
  },
  image: {
    width: deviceWidth - 102,
    height: 100,
    borderRadius: 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    flex: 3,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
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
