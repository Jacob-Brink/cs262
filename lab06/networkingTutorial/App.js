import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const loadData = async () => {
    const fetchResponse = await fetch('https://www.googleapis.com/books/v1/volumes?q=harry+potter');
    const json = await fetchResponse.json();
    setData(json.items);
    setLoading(false);
    console.log(json.items[0].id)
  }

  useEffect(() => {
    loadData();
  }, []);
  

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.volumeInfo.title}, {item.volumeInfo.publisher}</Text>
          )}
        />
      )}
    </View>
  );
};
