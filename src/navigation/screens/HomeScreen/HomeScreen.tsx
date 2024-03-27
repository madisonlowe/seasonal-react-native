import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Button,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "router";
import IngredientCard from "components/IngredientCard/IngredientCard";

type properties = NativeStackScreenProps<RootStackParamList>;

const cards = new Array(10).fill(null).map((v, i) => i + 1);

export default function HomeScreen({ navigation }: properties) {
  return (
    <View style={styles.container}>
      <Text>hi i'm the HOME screen component</Text>
      <StatusBar barStyle="dark-content" />
      {cards.map((i) => (
        <IngredientCard key={i}>{i.toString()}</IngredientCard>
      ))}
      <Button title="About" onPress={() => navigation.navigate("About")} />
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
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "ghostwhite",
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      ios: { paddingTop: 40 },
      android: { paddingTop: StatusBar.currentHeight },
    }),
  },
});
