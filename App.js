import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import DailyPic from "./screens/DailyPic"
import SpaceCrafts from "./screens/SpaceCrafts"
import StarMap from "./screens/StarMap"
import HomeScreen from "./screens/HomeScreen"

const Stack = createStackNavigator()

export default class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName = "Home" screenOptions = {{
          headerShown:false
        }}>  
        <Stack.Screen name ="Home" component = {HomeScreen}/>
        <Stack.Screen name ="Daily Pic" component = {DailyPic}/>
        <Stack.Screen name ="Space Crafts" component = {SpaceCrafts}/>
        <Stack.Screen name ="Star Map" component = {StarMap}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
