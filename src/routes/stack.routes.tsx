import React from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator()

import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { ShedulingComplete } from '../screens/ShedulingComplete';
import { MyCars } from "../screens/MyCars";

export function StackRoutes(){
    return (
        <Navigator
            screenOptions={{
                animation: "fade_from_bottom",
                headerShown: false,
                animationDuration: 200,
                presentation: 'modal'
            }} 
        >
            <Screen
                name="Home"
                component={Home}
            />
            <Screen
                name="CarDetails"
                component={CarDetails}
            />
            <Screen
                name="Scheduling"
                component={Scheduling}
            />
            <Screen
                name="SchedulingDetails"
                component={SchedulingDetails}
            />
            <Screen
                name="ShedulingComplete"
                component={ShedulingComplete}
            />
            <Screen
                name="MyCars"
                component={MyCars}
            />
        </Navigator>
    )
}