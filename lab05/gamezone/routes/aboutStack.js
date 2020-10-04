import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Header from '../shared/header';
import About from '../screens/about';

import { globalStyles }  from '../styles/global';

const Stack = createStackNavigator();

export default function AboutStack( {navigation} ) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="About"
                component={About}
                options={{
                    headerLeft: () =>  <Header navigation={navigation} />,   
                    headerTitleStyle: globalStyles.titleText,             
                }}
            />
        </Stack.Navigator>
    );
};