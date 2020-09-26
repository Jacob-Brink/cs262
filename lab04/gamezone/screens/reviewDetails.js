import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({ route, navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text>{ route.params.title }</Text>
            <Text style={globalStyles.paragraph}>{ route.params.body }</Text>
            <Text>Rating: { route.params.rating }</Text>
        </View>
    );
}
