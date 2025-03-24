import * as React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';

// Pantalla de configuraciones simple
export default function Screen3({route}) {
  const { message } = route.params;
  const navigation = useNavigation();
  return (
   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
               <Image source = {require('../assets/stand.png' )}
               style={{height: 600, width: 400}}/>
        <Button
                   title="I want to smile"
                   onPress={() => navigation.goBack('Smile' , {message: 'I want to smile'})}
                 />
       <Button
              title={message}
              onPress={() => navigation.reset({index: 0,
                routes: [{ name: 'Squat' }],
              })}
            />

            
       </View>
  );
}
