import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState('');

    const handleError = () => {
	//todo
    }

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
          placeholder='new todo...'
          value={text}
	  onChangeText={val => setText(val)} 
      />
	<Button title='add todo' onPress={handlePress} />
    </View>
  );
}
