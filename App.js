import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


//telas principais
const Tab = createBottomTabNavigator();

const novoGasto = () =>{
  return(
    <View style={styles.layout} >
      <StatusBar style="light" />
      <Text style={styles.title} >insira um novo gasto</Text>
    </View>
  )
}
const resumoDeGastos = () =>{
  return(
    <View style={styles.layout} >
      <Text style={styles.title} >Resumo de gastos por mes</Text>
    </View>
  )
}

const MainNavigator = () =>{
  return(
    <Tab.Navigator>
      <Tab.Screen name="novoGasto" component={novoGasto}/>
      <Tab.Screen name="resumoDeGastos" component={resumoDeGastos}/>
    </Tab.Navigator>
  )
}

/*
*/

//telas iniciais
const Stack = createNativeStackNavigator()

const initScreen = () =>{
  const navigation = useNavigation();
  return(
    <View style={styles.layout}>
      <Text style={styles.title} >initScreen</Text>
      <Button title="Login" onPress={()=>navigation.navigate('Main')}/>
    </View>
  )
}




export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Init" component={initScreen}/>
        <Stack.Screen name="Main" component={MainNavigator}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    backgroundColor: '#4181e8',
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#FFFFFF'
  },
});
