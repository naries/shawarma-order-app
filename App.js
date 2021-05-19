import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading'
import FeatherIcon from 'react-native-vector-icons/Feather'
import IoniconIcon from 'react-native-vector-icons/Ionicons'

// import pages
import Orders from './screens/Orders';
import ContactUs from './screens/ContactUs'

//import fonts
import { useFonts } from 'expo-font'

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Pattaya: require('./assets/Pattaya-Regular.ttf'),
  })

  if(!fontsLoaded){
    return <AppLoading />
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions = {({navigation}) => ({
          headerLeft: () => (<TouchableWithoutFeedback onPress={() => navigation.navigate('contact')}>
            <Text style={{textAlign: 'center', paddingHorizontal: 20}}>
            <IoniconIcon name="call" size={25} color='#333' solid/>
          </Text>
          </TouchableWithoutFeedback>),
          headerTitle: () => (<TouchableWithoutFeedback onPress={() => navigation.navigate('home')}>
            <Text style={{textAlign: 'center'}}>
              <IoniconIcon name="fast-food" size={40} color="orange" />
            </Text>
          </TouchableWithoutFeedback>
          ),
          headerRight: () => (<TouchableWithoutFeedback>
              <Text style={{textAlign: 'center', paddingHorizontal: 20}}>
              <FeatherIcon name="shopping-cart" size={25} color="#333" />
              </Text>
            </TouchableWithoutFeedback>
          ),
          
          headerStyle: {
            backgroundColor: 'white',
            shadowOpacity: 0,
            elevation: 0
          }
        })
      }>
        <Stack.Screen 
          name="home" 
          component={Orders}
        />
        <Stack.Screen 
          name="contact"
          component={ContactUs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
