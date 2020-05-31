/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

const HomeScreen = ({navigation}) => {
  return(
    <View style = {{flex:1,alignItems:'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button 
      title = "Go to Detail Screen"
      onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};


const DetailsScreen = () => {
  return(
    <View style = {{flex:1,alignItems:'center', justifyContent: 'center'}}>
      <Text>Detail Screen</Text>
    </View>
  );
};



const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen}/>
    <Stack.Screen name="Details" component={DetailsScreen}/>
    </Stack.Navigator>
    </NavigationContainer>
    );
  };
  export default App;







});