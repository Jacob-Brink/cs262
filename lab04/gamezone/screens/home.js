import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
	{title: "Rocket League", body: "A fun soccer game with a twist.", rating: 5.0, key: '0'},
	{title: "Among Us", body: "Hype. That's all it is. More text and more text and more text and more text and more text and more text and more text and more text and more text and more text and more text and more text and more text", rating: 4.0, key: '1' },
	{title: "Minecraft", body: "lego on the pc", rating: 2.0, key: '2'},
    ]);

    return (
        <View style={globalStyles.container}>
            <FlatList data={reviews} renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                    <Text style={globalStyles.titleText}>{ item.title }</Text>
                </TouchableOpacity>
            )} />
        </View>
    );
}
