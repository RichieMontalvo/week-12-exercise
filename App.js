import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Alert, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';

import ItemList from './components/ItemList';
import ItemDetails from './components/ItemDetails';

const Stack = createStackNavigator();

const App = () => {

  const [items, setItems] = useState([]);

  const pickPhoto = () => {
    Alert.alert("Pick Photo", "Time to access the library.");
  }

  const takePhoto = () => {
    Alert.alert("Take Photo", "Time to take the photo.");
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Item List" 
          component={ItemList} 
          initialParams={{ items: items }}
          options={{
            headerRight: () => (
              <View style={styles.buttons}>
                <Button 
                  title="Camera"
                  onPress={takePhoto}
                />

                <Button 
                  title="Library"
                  onPress={pickPhoto}
                  buttonStyle={styles.libraryButton}
                />
              </View>
            )
          }}
        />

        <Stack.Screen name="Item Details" component={ItemDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

const styles = StyleSheet.create({
  buttons: {
    marginRight: 5,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  libraryButton: {
    marginLeft: 5,
  }
})
