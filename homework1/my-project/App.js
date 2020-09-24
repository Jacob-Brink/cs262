import React, { useState } from 'react';
import { StyleSheet, View, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App() {
  const [todos, setTodos] = useState([]);

    const deleteItem = (key) => {
        setTodos(old => {
            return old.filter(todo => todo.key != key);
        });
    };

    const addTodo = (text) => {
        setTodos(old => {
            return [
                { text, key: `${ new Date().getTime() }` }, ...old
            ];
        });
    };
    
  return (
    <TouchableWithoutFeedback>
      <View>
        <Header/>
        <View>
          <AddTodo submitHandler={(text) => addTodo(text)}/>
          <View>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                  <TodoItem pressHandler={deleteItem} item={item}></TodoItem>
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
