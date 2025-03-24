import * as React from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';

// Pantalla de Perfil, accesible desde la pestaña de "Profile"
export default function OptionsScreen() {

  const options = [
    'Cambiar fondo de pantalla',
    'Toggle dark/ Light mode',
     'Cambiar foto de perfil',
     'eliminar cuenta',
    'reír para no llorar'
  ];
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style= {{ fontSize: 18, fontWeight: 'bold', marginBottom: 30, marginTop:30 }}>Opciones</Text>
      <FlatList data= {options}
        renderItem={({ item }) => (
          <Pressable style={{marginBottom:20, 
            borderRadius: 8, 
            padding: 10,
            backgroundColor: '#FFC0CB'}}
          onPress = {() => alert(`Seleccionaste: ${item}`)}
          >
            
            <Text style={{textAlign: 'center'}}>{item}</Text></Pressable>
        )}/>

    </View>
  );
}
