import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "src/router";
import IngredientCard from "src/components/IngredientCard/IngredientCard";
import { useEffect, useState } from "react";

type properties = NativeStackScreenProps<RootStackParamList>;

const cards = new Array(5).fill(null).map((v, i) => i + 1);

const fetchString =
  "https://drab-ruby-seahorse-veil.cyclic.app//produce/random";

export default function HomeScreen({ navigation }: properties) {
  const [randomArray, setRandomArray] = useState<any[]>([]);
  const [timeStamp, setTimeStamp] = useState("");

  const fetchData = async () => {
    const data = await fetch(`${fetchString}?month=${timeStamp}`);
    let result = await data.json();
    setRandomArray(result.payload);
  };

  function getMonth() {
    const today = new Date();
    let longMonth = today.toLocaleString("default", { month: "long" });
    setTimeStamp(longMonth);
  }

  useEffect(() => {
    getMonth();
  }, []);

  useEffect(() => {
    if (timeStamp === "") return;
    fetchData();
  }, [timeStamp]);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      pinchGestureEnabled={true}
      showsVerticalScrollIndicator={true}
    >
      <Text>hi i'm the HOME screen component</Text>
      {/* <StatusBar barStyle="dark-content" /> */}

      {randomArray && (
        <View style={styles.cards}>
          {randomArray.map((ingredient) => (
            <IngredientCard key={ingredient.id} imageUrl={ingredient.imageurl}>
              {ingredient.name}
            </IngredientCard>
          ))}
        </View>
      )}
      {/* <Button title="About" onPress={() => navigation.navigate("About")} />
      <Button
        title="First Item"
        onPress={() =>
          navigation.navigate("Details", {
            title: "First Item",
            content: "First Item Content",
            stock: 1,
          })
        }
      />
      <Button
        title="Second Item"
        onPress={() =>
          navigation.navigate("Details", {
            title: "Second Item",
            content: "Second Item Content",
            stock: 1,
          })
        }
      />
      <Button
        title="Third Item"
        onPress={() =>
          navigation.navigate("Details", {
            title: "Third Item",
            content: "Third Item Content",
            stock: 1,
          })
        }
      /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
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
  },
});
