import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput as NativeTextInput,
} from "react-native";
import { Ingredient } from "src/router";

export default function TextInput() {
  const [text, setText] = useState("");
  const [searchResults, setSearchResults] = useState<Ingredient[]>([]);

  const navigation = useNavigation<any>();

  // const navigation =
  //   useNavigation<NativeStackScreenProps<RootStackParamList>>();
  // FIX THIS TYPING

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
    width: 300,
    backgroundColor: "#fff",
    margin: 12,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#296243",
    padding: 10,
  },
});
