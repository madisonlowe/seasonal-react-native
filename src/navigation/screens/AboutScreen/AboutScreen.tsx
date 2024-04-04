import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  ScrollView,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../router";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = NativeStackScreenProps<RootStackParamList>;

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        pinchGestureEnabled={true}
        showsVerticalScrollIndicator={true}
      >
        <Text style={styles.text}>
          Seasonal is an app that helps people find out what food is in season
          in the UK.
        </Text>
        <Text style={styles.text}>
          There are many benefits to eating food that is in season.
        </Text>
        <Text style={styles.text}>
          Not only is it cheaper for you, but it means that food doesn't need to
          be shipped overseas. We can all reduce our carbon footprint by eating
          locally farmed produce. The further from home that your food is grown,
          the more energy and emissions it takes to reach your plate.
        </Text>
        <Text style={styles.text}>
          By eating seasonally, you'll also be supporting local farmers all year
          round.
        </Text>
      </ScrollView>
    </SafeAreaView>
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
      ios: { paddingTop: 10 },
      android: { paddingTop: StatusBar.currentHeight },
    }),
    padding: 20,
  },
  text: {
    lineHeight: 20,
    paddingVertical: 10,
    marginRight: "auto",
  },
});
