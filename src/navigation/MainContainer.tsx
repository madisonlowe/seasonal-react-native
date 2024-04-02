import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "src/navigation/screens/HomeScreen/HomeScreen";
import AboutScreen from "src/navigation/screens/AboutScreen/AboutScreen";
import SingleResultScreen from "./screens/SingleResultScreen/SingleResultScreen";
import { RootStackParamList } from "src/router";

// RootStackParamList which contains all information about our routes.
// We use together with NativeStackScreenProps to define route Props

//const Stack = createNativeStackNavigator<RootStackParamList>();
// creates navigation. returns Screen and Navigator

const Drawer = createDrawerNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
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
        <Drawer.Screen
          name="SingleResultScreen"
          component={SingleResultScreen}
          initialParams={{ title: "Ingredient" }}
          options={({ route }) => ({
            title: route.params.title,
            drawerItemStyle: { display: "none" },
          })}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
