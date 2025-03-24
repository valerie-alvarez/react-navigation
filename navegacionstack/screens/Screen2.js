import * as React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'
// El parámetro 'route' contiene información sobre la ruta actual y los parámetros pasados
// En este caso, 'route.params' contiene los parámetros enviados desde 'HomeScreen'
export default function Screen2({route}) {
  
  const { message } = route.params;
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source = {require('../assets/smile.png' )}
            style={{height: 600, width: 400}}/>
    <Button
           title={message }
           onPress={() => navigation.navigate('Stand' , {message: 'I want to squat'})}
        />
    <Button
           title="I want to squat"
           onPress={() => navigation.replace('Squat' , {message: 'I want to stand'})}
         />
    </View>
  );
}
