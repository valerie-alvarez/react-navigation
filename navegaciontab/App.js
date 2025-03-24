import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import Icon from 'react-native-vector-icons/MaterialIcons';
// Importamos las pantallas dersde la carpeta 'screens'
import ImageScreen from './screens/ImageScreen';
import OptionsScreen from './screens/OptionsScreen';
import QuizScreen from './screens/QuizScreen';

// Creamos el BottomTabNavigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // El NavigationContainer es el contenedor principal que maneja la navegación de toda la app
    <NavigationContainer>
      {/* El BottomTabNavigator renderiza las pestañas en la parte inferior */}
      <Tab.Navigator screenOptions={{
            tabBarItemStyle: { marginHorizontal: 0 }, 
          }}
        >
        {/* Cada Tab.Screen representa una pestaña */}
        <Tab.Screen name="Image" component={ImageScreen} options={{tabBarIcon: ({ focused }) => (
          <Icon name='photo' size={24} color={focused ? 'pink' : 'gray'}></Icon>
        )}} />
        <Tab.Screen name="Options" component={OptionsScreen} options={{tabBarIcon: ({ focused }) => (
          <Icon name='hub' size={24} color={focused ? 'pink' : 'gray'}></Icon>
        )}}/>
        <Tab.Screen name="Quiz" component={QuizScreen} options={{tabBarIcon: ({ focused }) => (
          <Icon name='quiz' size={24} color={focused ? 'pink' : 'gray'}></Icon>
        )}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
