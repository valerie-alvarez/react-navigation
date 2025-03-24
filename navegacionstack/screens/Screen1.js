import { Button, View, Text, Image } from 'react-native';
import React, { useState } from 'react';
// El parámetro 'navigation' es automáticamente proporcionado por el StackNavigator
// Sirve para navegar entre pantallas usando métodos como navigate()
// Como recordatorio el objeto que recibe siempre es props
// En este caso, solo estamos interesados en 'navigation'
// Por eso usamos la sintaxis ({ navigation })

export default function Screen1({ navigation }) {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source = {require('../assets/squat.png' )}
      style={{height: 600, width: 400}}/>
      {/* Usamos 'navigation.navigate' para movernos a la pantalla 'Details' */}
      {/* Además, pasamos un parámetro 'message' que será recibido en la pantalla 'Details' */}
      
      <Button
        title="I want to smile"
        onPress={() => navigation.replace('Smile', { message: 'I want to stand'})} 
      />

    </View>
  );
}
