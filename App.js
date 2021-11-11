import { StatusBar } from 'expo-status-bar';
import React ,{ useState } from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {InputWithLabel} from './components/inputWithLabel'
import {Input} from './components/input'


//telas principais
const Tab = createBottomTabNavigator();

const novoGasto = () =>{
  return(
    <View style={styles.layout} >
      <StatusBar style='light'/>
      <Text style={styles.title} >insira um novo gasto</Text>
    </View>
  )
}
const resumoDeGastos = () =>{
  return(
    <View style={styles.layout} >
      <StatusBar style='light'/>
      <Text style={styles.title} >Resumo de gastos por mes</Text>
    </View>
  )
}

const MainNavigator = () =>{
  return(
    <Tab.Navigator >
      <Tab.Screen name="novoGasto" component={novoGasto} options={{ headerShown: false }}/>
      <Tab.Screen name="resumoDeGastos" component={resumoDeGastos} options={{ headerShown: false }}/>
    </Tab.Navigator>
  )
}

/*
*/

//telas iniciais
const Stack = createNativeStackNavigator()

const initScreen = () =>{
  const navigation = useNavigation();
  const [login,setLogin] = useState("");
  const [password,setPassword] = useState("");
  return(
    <View style={styles.layout}>
      <InputWithLabel
        style={styles.title}
        label='Sing In'
        placeholder='Login'
        value={login}
        onChangeText={setLogin}
        inputStyle={styles.login}
      />
      <Input
        style={styles.title}
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        inputStyle={styles.login}
        secureTextEntry
      />
      <Button title="Login" onPress={()=>navigation.navigate('Main')}/>
    </View>
  )
}




export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Init" component={initScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Main" component={MainNavigator} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    backgroundColor: '#c2c2c2',
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#FFFFFF',
  },
  login: {
    borderColor:'#FFFFFF',
    borderWidth:2
  }
});
