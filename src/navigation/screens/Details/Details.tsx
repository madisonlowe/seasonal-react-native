import {
  Platform,
  StatusBar,
  StyleSheet,
  Button,
  View,
  Text,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../router";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

export default function Details({ navigation, route }: Readonly<Props>) {
  const { content, title } = route.params;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <Text>hi i'm the DETAILS screen component</Text>
      <Text>{content}</Text>
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      ios: { paddingTop: 40 },
      android: { paddingTop: StatusBar.currentHeight },
    }),
  },
});
