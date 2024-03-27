import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "navigation/screens/HomeScreen/HomeScreen";
import AboutScreen from "navigation/screens/AboutScreen/AboutScreen";
import { RootStackParamList } from "router";

// RootStackParamList which contains all information about our routes.
// We use together with NativeStackScreenProps to define route Props

//const Stack = createNativeStackNavigator<RootStackParamList>();
// creates navigation. returns Screen and Navigator

const Drawer = createDrawerNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
