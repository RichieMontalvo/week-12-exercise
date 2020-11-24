import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaView, FlatList, StyleSheet, TouchableOpacity, Text, View, Button, Image } from 'react-native';

const ItemList = ({ route, navigation }) => {

  const { items } = route.params

  useEffect( () => {
    console.log(items)
  })

  const goToDetails = (item) => {
    navigation.navigate('Item Details', {name: item.name, image: item.image});
  }

  const itemRow = ({ item }) => (
    <TouchableOpacity 
      style={styles.cell}
      onPress={() => goToDetails(item)}
    >
      <Image style={styles.image} source={item.image} />
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={styles.grid}>
      <FlatList 
      contentContainerStyle={styles.grid}
        data={items}
        renderItem={itemRow}
        keyExtractor={item => item.id}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
export default ItemList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  grid: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: 24,
    marginLeft: 20,
  },
  cell: {
    width: 120,
    height: 120,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  image: {
    width: 115,
    height: 115,
  }
});
