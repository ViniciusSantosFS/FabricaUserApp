import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import AddUser from "./screens/AddUser";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Home} />
        <Stack.Screen name="Adicionar" component={AddUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
