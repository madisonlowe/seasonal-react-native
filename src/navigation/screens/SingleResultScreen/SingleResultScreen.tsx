import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Ingredient, RootStackParamList } from "../../../router";
import Button from "src/components/Button/Button";
import { ScrollView } from "react-native-gesture-handler";
import { useState } from "react";

type Props = NativeStackScreenProps<RootStackParamList, "SingleResultScreen">;

export default function SingleResultScreen({
  navigation,
  route,
}: Readonly<Props>) {
  const { title, ingredient } = route.params;
  const [inSeasonIngredients, setInSeasonIngredients] = useState<Ingredient[]>(
    []
  );

  const fetchMonthString = `https://drab-ruby-seahorse-veil.cyclic.app//produce?month=`;

  async function getInSeasonIngredients(month: string) {
    const data = await fetch(fetchMonthString + month);
    let result = await data.json();
    setInSeasonIngredients(result.payload);
  }

  async function onPress(month: string) {
    await getInSeasonIngredients(month);
    navigation.navigate("SearchResults", {
      ingredients: inSeasonIngredients,
    });
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.h1}>{title}</Text>
      <View style={styles.pills}>
        {ingredient.month.map((month) => (
          <Button
            key={month}
            title={month}
            onPress={() => onPress(month)}
            isPill
          />
        ))}
      </View>
      <Image
        style={styles.image}
        source={{ uri: ingredient.imageurl }}
        resizeMode="center"
      />
      <Text style={styles.description}>{ingredient.description}</Text>
      <View style={styles.pills}>
        <Text style={styles.bold}>{`Family: ${ingredient.allergens}`}</Text>
        <Text style={styles.bold}>{`Food Type: ${ingredient.foodtype}`}</Text>
        <Text style={styles.bold}>{`Used As: ${ingredient.usedas}`}</Text>
        <Text style={styles.bold}>{`Allergens: ${ingredient.allergens}`}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
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
  bold: {
    fontWeight: "bold",
  },
});
