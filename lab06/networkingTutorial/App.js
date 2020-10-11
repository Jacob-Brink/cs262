import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const loadData = async () => {
    const fetchResponse = await fetch('https://www.googleapis.com/books/v1/volumes?q=harry+potter');
    const json = await fetchResponse.json();
    setData(json);
    setLoading(false);
    console.log(json);
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
            <Text>{item.title}, {item.releaseYear}</Text>
          )}
        />
      )}
    </View>
  );
};
