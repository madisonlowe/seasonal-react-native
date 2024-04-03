import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput as NativeTextInput,
} from "react-native";
import { Ingredient, RootStackParamList } from "src/router";

type Props = NativeStackScreenProps<RootStackParamList>;

export default function TextInput({ navigation }: Props) {
  // fix this typing
  const [text, setText] = useState("");
  const [searchResults, setSearchResults] = useState<Ingredient[]>([]);

  const searchString = `https://drab-ruby-seahorse-veil.cyclic.app//produce?item=${text}`;

  async function getSearchResults() {
    const data = await fetch(searchString);
    let result = await data.json();
    setSearchResults(result.payload);
  }

  function onSubmit() {
    navigation.navigate("SearchResults", { ingredients: searchResults });
  }

  useEffect(() => {
    getSearchResults();
  }, [text]);

  return (
    <SafeAreaView>
      <NativeTextInput
        style={styles.input}
        onChangeText={(text) => setText(text)}
        onSubmitEditing={() => onSubmit()}
        placeholder="Search for an ingredient"
        maxLength={50}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    backgroundColor: "#fff",
    margin: 12,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
  },
});
