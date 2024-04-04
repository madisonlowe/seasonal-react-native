import { Platform, StatusBar, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../router";
import IngredientCard from "src/components/IngredientCard/IngredientCard";
import { ScrollView } from "react-native-gesture-handler";

type Props = NativeStackScreenProps<RootStackParamList, "SearchResults">;

export default function SearchResultsScreen({
  navigation,
  route,
}: Readonly<Props>) {
  const { ingredients } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {ingredients.map((ingredient) => (
        <IngredientCard
          key={ingredient.id}
          imageUrl={ingredient.imageurl}
          onPress={() =>
            navigation.navigate("SingleResultScreen", {
              title: ingredient.name,
              ingredient: ingredient,
            })
          }
        >
          {ingredient.name}
        </IngredientCard>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 60,
    ...Platform.select({
      ios: { paddingTop: 40 },
      android: { paddingTop: StatusBar.currentHeight },
    }),
  },
  cards: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "ghostwhite",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  headingContainer: {
    paddingBottom: 10,
  },
  h1: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  bold: {
    fontWeight: "bold",
    textAlign: "center",
  },
});
