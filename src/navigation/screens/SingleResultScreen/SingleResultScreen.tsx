import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../router";
import Button from "src/components/Button/Button";
import { ScrollView } from "react-native-gesture-handler";

type Props = NativeStackScreenProps<RootStackParamList, "SingleResultScreen">;

export default function SingleResultScreen({
  navigation,
  route,
}: Readonly<Props>) {
  const { title, ingredient } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.h1}>{title}</Text>
      <View style={styles.pills}>
        {ingredient.month.map((month, index) => (
          <Button
            key={index}
            title={month}
            onPress={() => {
              console.log("pill clicked");
            }}
            isPill
          />
        ))}
        <Button
          title={`Family: ${ingredient.allergens}`}
          onPress={() => {
            console.log("pill clicked");
          }}
          isPill
        />
        <Button
          title={`Food Type: ${ingredient.foodtype}`}
          onPress={() => {
            console.log("pill clicked");
          }}
          isPill
        />
        <Button
          title={`Used As: ${ingredient.usedas}`}
          onPress={() => {
            console.log("pill clicked");
          }}
          isPill
        />
        <Button
          title={`Allergens: ${ingredient.allergens}`}
          onPress={() => {
            console.log("pill clicked");
          }}
          isPill
        />
      </View>
      <Image
        style={styles.image}
        source={{ uri: ingredient.imageurl }}
        resizeMode="center"
      />
      <Text style={styles.description}>{ingredient.description}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "ghostwhite",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    paddingBottom: 60,
    ...Platform.select({
      ios: { paddingTop: 40 },
      android: { paddingTop: StatusBar.currentHeight },
    }),
  },
  pills: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 20,
    gap: 8,
    justifyContent: "center",
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
  description: {
    paddingVertical: 20,
    fontSize: 16,
    lineHeight: 26,
  },
});
