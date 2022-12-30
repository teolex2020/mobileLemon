import React from "react";
import { StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";

import WelcomeScreen from "./screens/WelcomeScreen";
import MenuScreen from "./screens/MenuScreen";
import FeedbackScreen from "./screens/FeedbackScreen";
import SubscribeScreen from "./screens/SubscribeScreen";
import LoginScreen from "./screens/LoginScreen";


const Tab = createBottomTabNavigator();

function LogoTitle() {
  return (
    <Image
      source={require("./img/LittleLemonSmallLogo.png")}
      style={{
        height: 40,
        width: 300,
        resizeMode: "contain",
        alighSelf: "center",
      }}
    />
  );
}

export default function App() {
  const [loaded] = useFonts({
    NotoSerifOriya: require("./assets/fonts/NotoSerifOriya.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Login"
       
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Welcome") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Menu") {
              iconName = "ios-list";
            } else if (route.name === "Feedback") {
              iconName = focused ? "chatbubble" : "chatbubble-outline";
            } else if (route.name === "Subscribe") {
              iconName = focused ? "notifications" : "notifications-outline";
            } else if (route.name === "Login") {
              iconName = focused ? "log-in" : "log-in-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "#b1950d",
          headerStyle: { backgroundColor: "#F4CE14" },
        })}
      >
        <Tab.Screen name="Welcome" component={WelcomeScreen} />
        <Tab.Screen name="Menu" component={MenuScreen} />
        <Tab.Screen name="Subscribe" component={SubscribeScreen} />
        <Tab.Screen name="Feedback" component={FeedbackScreen} />
        <Tab.Screen name="Login" component={LoginScreen} />
      </Tab.Navigator>
    
    </NavigationContainer>
  );
}

const appStyles = StyleSheet.create({
  mainContainer: {
    flex: 1, //means the entire mobile screen is taken up by this view. Maybe we always do this with the View of the root components in the App.js??
    backgroundColor: "#495E57",
  },

  footerContainer: {
    // paddingVertical: 10,
    backgroundColor: "#495E57",
    // borderColor: "red",
    // borderWidth: 2,
  },
});
