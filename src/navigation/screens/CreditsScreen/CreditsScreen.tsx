import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  ScrollView,
  Linking,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const creditLinks = [
  { name: "andinur", url: "https://www.flaticon.com/authors/andinur" },
  { name: "AngDiz", url: "https://www.flaticon.com/authors/angdiz" },
  {
    name: "AmethystDesign",
    url: "https://www.flaticon.com/authors/amethystdesign",
  },
  {
    name: "Artlèga Studio",
    url: "https://www.flaticon.com/authors/artlega-studio",
  },
  {
    name: "Chanut-is-Industries",
    url: "https://www.flaticon.com/authors/Chanut-is-industries",
  },
  { name: "dDara", url: "https://www.flaticon.com/authors/dDara" },
  { name: "designbydai", url: "https://www.flaticon.com/authors/designbydai" },
  {
    name: "DinosoftLabs",
    url: "https://www.flaticon.com/authors/dinosoftlabs",
  },
  { name: "Freepik", url: "https://www.freepik.com" },
  { name: "Futuer", url: "https://www.flaticon.com/authors/futuer" },
  { name: "Icongeek26", url: "https://www.flaticon.com/authors/icongeek26" },
  {
    name: "imaginationlol",
    url: "https://www.flaticon.com/authors/imaginationlol",
  },
  { name: "kerismaker", url: "https://www.flaticon.com/authors/kerismaker" },
  { name: "kosonicon", url: "https://www.flaticon.com/authors/kosonicon" },
  { name: "Linector", url: "https://www.flaticon.com/authors/linector" },
  { name: "Luvdat", url: "https://www.flaticon.com/authors/luvdat" },
  {
    name: "mangsaabguru",
    url: "https://www.flaticon.com/authors/mangsaabguru",
  },
  { name: "max.icons", url: "https://www.flaticon.com/authors/maxicons" },
  { name: "monkik", url: "https://www.flaticon.com/authors/monkik" },
  {
    name: "Nikita Golubev",
    url: "https://www.flaticon.com/authors/nikita-golubev",
  },
  { name: "popo2021", url: "https://www.flaticon.com/authors/popo2021" },
  {
    name: "smashingstocks",
    url: "https://www.flaticon.com/authors/smashingstocks",
  },
  { name: "Sea.icon", url: "https://www.flaticon.com/authors/seaicon" },
  { name: "shmai", url: "https://www.flaticon.com/authors/shmai" },
  { name: "Smashicons", url: "https://www.flaticon.com/authors/smashicons" },
  { name: "surang", url: "https://www.flaticon.com/authors/surang" },
  { name: "Umeicon", url: "https://www.flaticon.com/authors/umeicon" },
  {
    name: "Vitaly Gorbachev",
    url: "https://www.flaticon.com/authors/Vitaly-Gorbachev",
  },
  { name: "yukyik", url: "https://www.flaticon.com/authors/yukyik" },
];

export default function CreditsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        pinchGestureEnabled={true}
        showsVerticalScrollIndicator={true}
      >
        <Text style={styles.text}>
          Icons from www.flaticon.com were made by:
        </Text>
        {creditLinks.map((credit, index) => (
          <Text
            key={index}
            style={{ color: "blue" }}
            onPress={() => Linking.openURL(credit.url)}
          >
            {credit.name}
          </Text>
        ))}
      </ScrollView>
    </SafeAreaView>
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
      ios: { paddingTop: 10 },
      android: { paddingTop: StatusBar.currentHeight },
    }),
    paddingHorizontal: 20,
  },
  text: {
    paddingVertical: 10,
    marginRight: "auto",
  },
});
