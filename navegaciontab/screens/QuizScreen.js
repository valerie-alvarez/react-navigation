import React, { useState } from 'react';
import { View, Text , TextInput} from 'react-native';
import RadioGroup, { RadioButton } from 'react-native-radio-buttons-group';

// Esta pantalla puede recibir el objeto 'navigation', aunque no es necesario para este ejemplo
export default function QuizScreen() {


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     
      <Text style={{padding: 10, fontSize: 30, margin: 10}}>1. ¿Cómo se llama la cordillera más larga del mundo?</Text>
      <Text>A. Himalaya</Text>
      <Text>B. Andes</Text>
      <Text>C. Alpes</Text>
      <TextInput style={{marginTop: 10 , width: 300, padding:10, backgroundColor:'#FFC0CB', borderRadius:30}}/>
      
   
    <Text style={{padding: 10, fontSize: 30, margin: 10}}> 2. ¿Cuántos países atraviesa?</Text>
    <Text>A. Siete </Text>
    <Text>B. Seis</Text>
    <Text>C. Ocho</Text>
    <TextInput style={{marginTop: 10 , width: 300, padding:10, backgroundColor:'#FFC0CB', borderRadius:30}}/>

    <Text style={{padding: 10, fontSize: 30, margin: 10}}>3. ¿Qué edad tiene?</Text>
    <Text>A. 20 millones de años </Text>
    <Text>B. 300 millones de años</Text>
    <Text>C. 70 millones de años</Text>
    <TextInput style={{marginTop: 10 , width: 300, padding:10, backgroundColor:'#FFC0CB', borderRadius:30}}/>

    </View>
  );
}
