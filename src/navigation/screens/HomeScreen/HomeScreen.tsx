import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from "react-native";
import { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Ingredient, RootStackParamList } from "src/router";
import IngredientCard from "src/components/IngredientCard/IngredientCard";
import TextInput from "src/components/TextInput/TextInput";
import Button from "src/components/Button/Button";

type properties = NativeStackScreenProps<RootStackParamList>;

export default function HomeScreen({ navigation }: Readonly<properties>) {
  const [randomArray, setRandomArray] = useState<any[]>([]);
  const [timeStamp, setTimeStamp] = useState("");
  const [inSeasonIngredients, setInSeasonIngredients] = useState<Ingredient[]>(
    []
  );

  const fetchRandomString = `https://drab-ruby-seahorse-veil.cyclic.app//produce/random?month=${timeStamp}`;
  const fetchMonthString = `https://drab-ruby-seahorse-veil.cyclic.app//produce?month=${timeStamp}`;

  function getMonth() {
    const today = new Date();
    let longMonth = today.toLocaleString("default", { month: "long" });
    setTimeStamp(longMonth);
  }

  const fetchRandomData = async (string: string) => {
    const data = await fetch(string);
    let result = await data.json();
    setRandomArray(result.payload);
  };

  async function getInSeasonIngredients() {
    const data = await fetch(fetchMonthString);
    let result = await data.json();
    setInSeasonIngredients(result.payload);
  }

  useEffect(() => {
    getMonth();
  }, []);

  useEffect(() => {
    if (timeStamp === "") return;
    fetchRandomData(fetchRandomString);
    getInSeasonIngredients();
  }, [timeStamp]);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      pinchGestureEnabled={true}
      showsVerticalScrollIndicator={true}
    >
      <View style={styles.headingContainer}>
        <Text style={styles.h1}>It's {timeStamp}!</Text>
        <Text style={styles.bold}>Some things in season...</Text>
      </View>

      <TextInput navigation={navigation} route={route} />

      {randomArray && (
        <View style={styles.cards}>
          {randomArray.map((ingredient) => (
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
        </View>
      )}

      <Button
        title="More in Season"
        onPress={() =>
          navigation.navigate("SearchResults", {
            ingredients: inSeasonIngredients,
          })
        }
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 60,
    backgroundColor: "ghostwhite",
    alignItems: "center",
    justifyContent: "center",
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

/*
TO DO:
- google accessibility on mobile
- google ios and android crossovers
- google styling norms - styled components or smth to get around no parent styling?

- style the nav component and drawer
- make the onPress move us to a new page (slug)

onPress={() =>
                navigation.navigate("SingleResultScreen", {
                  ingredient: ingredient,
                })
              }
*/
