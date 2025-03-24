import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importamos las pantallas desde la carpeta 'screens'
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
// Creamos un StackNavigator
const Stack = createStackNavigator();

export default function App() {
  return (
    // El NavigationContainer es el contenedor principal que maneja toda la navegación en la app
    <NavigationContainer>
      {/* El Stack.Navigator maneja la pila de pantallas para la navegación de stack */}
      <Stack.Navigator initialRouteName="Squat">
        {/* Cada Stack.Screen representa una pantalla en el stack */}
        {/* 'navigation' será automáticamente pasado a cada pantalla */}
        <Stack.Screen name="Squat" component={Screen1} />
        <Stack.Screen name="Smile" component={Screen2} />
        <Stack.Screen name="Stand" component={Screen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
