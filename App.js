import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ItemList from './components/ItemList';
import ItemDetails from './components/ItemDetails';

const Stack = createStackNavigator();

const App = () => {

  const [items, setItems] = useState([
    {id: 1, name: 'First Item', image: require('./assets/deer-1.jpg')},
    {id: 2, name: 'Second Item', image: require('./assets/deer-2.jpg')},
    {id: 3, name: 'Third Item', image: require('./assets/deer-3.jpg')},
    {id: 4, name: 'First Item', image: require('./assets/deer-1.jpg')},
    {id: 5, name: 'Second Item', image: require('./assets/deer-2.jpg')},
    {id: 6, name: 'Third Item', image: require('./assets/deer-3.jpg')},
    {id: 7, name: 'First Item', image: require('./assets/deer-1.jpg')},
    {id: 8, name: 'Second Item', image: require('./assets/deer-2.jpg')},
    {id: 9, name: 'Third Item', image: require('./assets/deer-3.jpg')},
  ]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Item List" 
          component={ItemList} 
          initialParams={{ items: items }}
        />
        <Stack.Screen name="Item Details" component={ItemDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
