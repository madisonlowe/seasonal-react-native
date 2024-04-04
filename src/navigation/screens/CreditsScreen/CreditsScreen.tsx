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
  { name: "andinur", url: "https://www.flaticon.com/authors/andinur", id: 1 },
  { name: "AngDiz", url: "https://www.flaticon.com/authors/angdiz", id: 2 },
  {
    name: "AmethystDesign",
    url: "https://www.flaticon.com/authors/amethystdesign",
    id: 3,
  },
  {
    name: "Artlèga Studio",
    url: "https://www.flaticon.com/authors/artlega-studio",
    id: 4,
  },
  {
    name: "Chanut-is-Industries",
    url: "https://www.flaticon.com/authors/Chanut-is-industries",
    id: 5,
  },
  { name: "dDara", url: "https://www.flaticon.com/authors/dDara", id: 6 },
  {
    name: "designbydai",
    url: "https://www.flaticon.com/authors/designbydai",
    id: 7,
  },
  {
    name: "DinosoftLabs",
    url: "https://www.flaticon.com/authors/dinosoftlabs",
    id: 8,
  },
  { name: "Freepik", url: "https://www.freepik.com", id: 9 },
  { name: "Futuer", url: "https://www.flaticon.com/authors/futuer", id: 10 },
  {
    name: "Icongeek26",
    url: "https://www.flaticon.com/authors/icongeek26",
    id: 11,
  },
  {
    name: "imaginationlol",
    url: "https://www.flaticon.com/authors/imaginationlol",
    id: 12,
  },
  {
    name: "kerismaker",
    url: "https://www.flaticon.com/authors/kerismaker",
    id: 13,
  },
  {
    name: "kosonicon",
    url: "https://www.flaticon.com/authors/kosonicon",
    id: 14,
  },
  {
    name: "Linector",
    url: "https://www.flaticon.com/authors/linector",
    id: 15,
  },
  { name: "Luvdat", url: "https://www.flaticon.com/authors/luvdat", id: 16 },
  {
    name: "mangsaabguru",
    url: "https://www.flaticon.com/authors/mangsaabguru",
    id: 17,
  },
  {
    name: "max.icons",
    url: "https://www.flaticon.com/authors/maxicons",
    id: 18,
  },
  { name: "monkik", url: "https://www.flaticon.com/authors/monkik", id: 19 },
  {
    name: "Nikita Golubev",
    url: "https://www.flaticon.com/authors/nikita-golubev",
    id: 20,
  },
  {
    name: "popo2021",
    url: "https://www.flaticon.com/authors/popo2021",
    id: 21,
  },
  {
    name: "smashingstocks",
    url: "https://www.flaticon.com/authors/smashingstocks",
    id: 22,
  },
  { name: "Sea.icon", url: "https://www.flaticon.com/authors/seaicon", id: 23 },
  { name: "shmai", url: "https://www.flaticon.com/authors/shmai", id: 24 },
  {
    name: "Smashicons",
    url: "https://www.flaticon.com/authors/smashicons",
    id: 25,
  },
  { name: "surang", url: "https://www.flaticon.com/authors/surang", id: 26 },
  { name: "Umeicon", url: "https://www.flaticon.com/authors/umeicon", id: 27 },
  {
    name: "Vitaly Gorbachev",
    url: "https://www.flaticon.com/authors/Vitaly-Gorbachev",
    id: 28,
  },
  { name: "yukyik", url: "https://www.flaticon.com/authors/yukyik", id: 29 },
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
        {creditLinks.map((credit) => (
          <Text
            key={credit.id}
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
