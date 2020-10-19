import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Header from '../shared/header';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import { globalStyles } from '../styles/global';

const Stack = createStackNavigator();
export default function HomeStack( {navigation} ) {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle:{backgroundColor:'#ddd'}
        }}>
            <Stack.Screen
                name="GameZone"
                component={Home}
                options={{
                    headerLeft: () =>  <Header navigation={navigation} />,
                    headerTitleStyle: globalStyles.titleText,
                }}
            />
            <Stack.Screen
                name="ReviewDetails"
                component={ReviewDetails}
                options={{
                    title: 'Review Details',
                    headerTitleStyle: globalStyles.titleText,
                }}
            />
        </Stack.Navigator>
    );
};
