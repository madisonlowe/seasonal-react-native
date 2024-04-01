import { Platform, StatusBar, StyleSheet, View, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../router";

interface SingleResultScreenProps {
  ingredient: {
    name: string;
  };
  navigation: NativeStackScreenProps<RootStackParamList>;
}

export default function SingleResultScreen({
  ingredient,
  navigation,
}: SingleResultScreenProps) {
  return (
    <View style={styles.container}>
      <Text>hi i'm the SINGLE RESULT screen component</Text>
      <Text>{ingredient.name}</Text>
      <StatusBar barStyle="dark-content" />
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
