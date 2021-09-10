import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Home from "./screens/Home";
import AddUser from "./screens/AddUser";

const Tab = createBottomTabNavigator();

export default function Routes() {
  const screenOptions = ({ route }) => {
    return {
      tabBarIcon: ({ focused }) => {
        let iconName;

        if (route.name === "Inicio") {
          iconName = focused ? "home-circle" : "home-circle-outline";
        } else if (route.name === "Adicionar") {
          iconName = focused ? "account-plus" : "account-plus-outline";
        }

        return (
          <MaterialCommunityIcons name={iconName} size={32} color="#000000" />
        );
      },
    };
  };

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Inicio" component={Home} />
        <Tab.Screen name="Adicionar" component={AddUser} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
