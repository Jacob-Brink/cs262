import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [birthdays, setBirthdays] = useState([]);

    function addBirthday() {
        setAge(age+1);
    };

    useEffect(() => {
        setBirthdays(birthdays.concat({key: age.toString()}));    
    }, [age]);
    
    return (
        <View style={styles.container}>

          <Text>My name is {name}</Text>
 	  <TextInput
    	    multiline
    	    keyboardType='numeric'
    	    style={styles.input}
    	    placeholder='e.g. John Doe'
    	    onChangeText={(val) => setName(val)}
    	  />          
          
          <Text>{name} is {birthdays.length} years old</Text>
          
          <Button title='Birthday' onPress={addBirthday}></Button>
          <FlatList
            data={birthdays}
            renderItem={({ item }) => (
                <Text style={styles.item}>{item.key}</Text>
            )
            }
            />

        </View>
    );

}

const styles = StyleSheet.create({
    container: {
	flex: 1,
	backgroundColor: '#fff',
	alignItems: 'center',
	justifyContent: 'center',
    },
    buttonContainer: {
	marginTop: 20
    },
    input: {
	borderWidth: 1,
	borderColor: '#777',
	padding: 8,
	margin: 10,
	width: 200,
    },
    item: {
        marginTop: 24,
        fontSize: 24
    }
});
