import { StatusBar } from 'expo-status-bar';
import React ,{ useState } from 'react';
import { StyleSheet, Text, View,Button,Image } from 'react-native';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {InputWithLabel} from './components/inputWithLabel'
import {Input} from './components/input'


//telas principais
const Tab = createBottomTabNavigator();

const resumoDeGastos = () =>{
  return(
    <View style={styles.layout} >
      <StatusBar style='light'/>
      <Text style={styles.title} >resumoDeGastos</Text>
    </View>
  )
}
const novoGasto = () =>{
  const [value,setValue] = useState("");
  return(
    <View style={styles.layout} >
      <StatusBar style='light'/>
      <InputWithLabel
        style={styles.title}
        label='Inserir um novo gasto'
        placeholder='Valor'
        value={value}
        onChangeText={setValue}
        inputStyle={styles.login}
      />
      <View style={styles.button}>
        <Button title="Adicionar" onPress={()=> {}} color="#757575"/>
      </View>
    </View>
  )
}

const MainNavigator = () =>{
  return(
    <Tab.Navigator >
      <Tab.Screen name="novoGasto" component={novoGasto} options={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => (
          <View style={{alignItems:'center',justifyContent:'center',top:0}}>
            <Image
              source={require('./assets/cash-icon-png-24.jpg')}
              resizeMode = 'contain'
              style={{width:25,height:25,tintColor: focused ? 'red' : '#757575'}}
            />
            <Text style={{color: focused ? 'red': '#757575',fontSize:12}}>Novo Gasto</Text>
          </View>
        ),
      }} />
      <Tab.Screen name="resumoDeGastos" component={resumoDeGastos} options={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => (
          <View style={{alignItems:'center',justifyContent:'center',top:0}}>
            <Image
              source={require('./assets/6f3ee02c67912c31632335bba755dd1d.png')}
              resizeMode = 'contain'
              style={{width:25,height:25,tintColor: focused ? 'red' : '#757575'}}
            />
            <Text style={{color: focused ? 'red': '#757575',fontSize:12}}>Resumo</Text>
          </View>
        ),
      }} />
    </Tab.Navigator>
  )
}

/*
ss
*/

//telas iniciais
const Stack = createNativeStackNavigator()

const initScreen = () =>{
  const navigation = useNavigation();
  const [login,setLogin] = useState("");
  const [password,setPassword] = useState("");
  const logo = require('./assets/pngwing.com.png')
  return(
    <View style={styles.layout}>
      <Image style={styles.image} source={logo}/>
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
      <View style={styles.button}>
        <Button title="Login" onPress={()=>navigation.navigate('Main')} color="#757575"/>
      </View>
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
    width:'100%',
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
    borderWidth:2,
    borderRadius:10
  },
  button:{
    paddingHorizontal:100,
    marginTop:100
  },
  image: {
    width:100,
    height:100,
    alignSelf:'center'
  }
});
