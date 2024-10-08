import "react-native-gesture-handler";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Button } from "react-native";

import HomeScreen from "src/navigation/screens/HomeScreen/HomeScreen";
import AboutScreen from "src/navigation/screens/AboutScreen/AboutScreen";
import CreditsScreen from "./screens/CreditsScreen/CreditsScreen";
import SingleResultScreen from "./screens/SingleResultScreen/SingleResultScreen";
import SearchResultsScreen from "./screens/SearchResultsScreen/SearchResultsScreen";

import { RootStackParamList } from "src/router";

const Drawer = createDrawerNavigator<RootStackParamList>();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "ghostwhite",
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#e0ece2",
          },
          drawerActiveTintColor: "#296243",
          drawerInactiveTintColor: "#1f1f1f",
          headerStyle: {
            backgroundColor: "#296243",
          },
          headerTintColor: "#f2f2f2",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Credits" component={CreditsScreen} />
        <Drawer.Screen
          name="SingleResultScreen"
          component={SingleResultScreen}
          initialParams={{ title: "Ingredient" }}
          options={({ route, navigation }) => ({
            title: route.params.title,
            drawerItemStyle: { display: "none" },
            headerRight: () => (
              <Button
                title="Back"
                onPress={() => navigation.goBack()}
                color="white"
              />
            ),
          })}
        />
        <Drawer.Screen
          name="SearchResults"
          component={SearchResultsScreen}
          initialParams={{ ingredients: [] }}
          options={({ route, navigation }) => ({
            title: "Results",
            ingredients: route.params.ingredients,
            drawerItemStyle: { display: "none" },
            headerRight: () => (
              <Button
                title="Back"
                onPress={() => navigation.goBack()}
                color="white"
              />
            ),
          })}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
