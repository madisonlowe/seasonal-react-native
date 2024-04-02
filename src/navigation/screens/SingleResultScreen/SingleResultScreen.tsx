import { Platform, StatusBar, StyleSheet, Text, Image } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../router";
import Button from "src/components/Button/Button";
import { ScrollView } from "react-native-gesture-handler";

type Props = NativeStackScreenProps<RootStackParamList, "SingleResultScreen">;

export default function SingleResultScreen({
  navigation,
  route,
}: Readonly<Props>) {
  const { ingredient } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.h1}>{ingredient.name}</Text>
      {/* pills for food types etc here */}
      <Image
        style={styles.image}
        source={{ uri: ingredient.imageurl }}
        resizeMode="center"
      />
      <Text>{ingredient.description}</Text>
      <Text>{ingredient.allergens}</Text>
      <Text>{ingredient.family}</Text>
      <Text>{ingredient.foodtype}</Text>
      <Text>{ingredient.id}</Text>
      <Text>{ingredient.usedas}</Text>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "ghostwhite",
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      ios: { paddingTop: 40 },
      android: { paddingTop: StatusBar.currentHeight },
    }),
  },
  image: {
    width: 298,
    height: 298,
    borderRadius: 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    flex: 3,
    backgroundColor: "#fff",
  },
  h1: {
    fontWeight: "bold",
    fontSize: 30,
  },
});
