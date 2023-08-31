import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

import { Home } from "../screens/Home";
import { CarDetails } from "../screens/CarDetails";
import { Scheduling } from "../screens/Scheduling";
import { SchedulingDetails } from "../screens/SchedulingDetails";
import { ShedulingComplete } from "../screens/ShedulingComplete";
import { MyCars } from "../screens/MyCars";
import { Splash } from "../screens/Splash";
import { SignIn } from "../screens/SignIn";

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        animation: "fade_from_bottom",
        headerShown: false,
        animationDuration: 200,
        presentation: "modal",
      }}
      initialRouteName="SignIn"
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Splash" component={Splash} />
      <Screen
        name="Home"
        component={Home}
        options={{
          gestureEnabled: false,
        }}
      />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="ShedulingComplete" component={ShedulingComplete} />
      <Screen name="MyCars" component={MyCars} />
    </Navigator>
  );
}
