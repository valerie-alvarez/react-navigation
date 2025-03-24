import * as React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

// Cada pantalla recibe automáticamente un objeto 'navigation' para manejar la navegación, aunque en este caso no lo utilizamos
export default function ImageScreen() {
  return (
    <View style={{ flex: 1 }}>
    <ScrollView contentContainerStyle={{ alignItems: 'center', paddingVertical: 20 }}>
      <Image source={{ uri: 'https://underwaterphotographeroftheyear.com/media/2611/101.jpg' }}
        style={{ height: 400, width: 200}} />
      <Image source={{ uri: 'https://underwaterphotographeroftheyear.com/media/2731/9901.jpg' }}
        style={{ height: 300, width: 400}} />
      <Image source={{ uri: 'https://underwaterphotographeroftheyear.com/media/2612/102.jpg' }}
        style={{ height: 300, width: 400}} />
      <Image source={{ uri: 'https://underwaterphotographeroftheyear.com/media/2622/202.jpg' }}
        style={{ height: 300, width: 400}} />
      <Image source={{ uri: 'https://underwaterphotographeroftheyear.com/media/2632/302.jpg' }}
        style={{ height: 300, width: 400}} />
      <Image source={{ uri: 'https://underwaterphotographeroftheyear.com/media/2691/901.jpg' }}
        style={{ height: 300, width: 400}} />
    </ScrollView>
  </View>
  );
}
