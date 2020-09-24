import React, { useState } from 'react';
import { StyleSheet, View, Alert, TextInput, Button } from 'react-native';

export default function AddTodo({ submitHandler }) {
    const [text, setText] = useState('');

    const handleError = () => {
	Alert.alert('Oops!', 'Todos must be over 3 chars long', [ { text: 'Understood', onPress: () => console.log('alert closed')}]);
    };

    const addText = (text) => {
	submitHandler(text);
	setText('');
    };
    
    const handlePress = () => {
	(text.length > 3) ? addText(text) : handleError();
    };
    
    return (
        <View>
          <TextInput
            style={styles.input}
            placeholder='new todo...'
            value={text}
	    onChangeText={val => setText(val)} 
          />
	  <Button title='add todo' onPress={handlePress} color='coral'/>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }
});
