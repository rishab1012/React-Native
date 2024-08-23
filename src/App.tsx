import { View, Text } from 'react-native'
import React from 'react'

// navigation imports
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator} from "@react-navigation/native-stack"

// screens
import Home from './screens/Home'
import Details from './screens/Details'

export type RootStackParamList = {
  Home:undefined
  Details:{productId:string}
}

const Stack= createNativeStackNavigator<RootStackParamList>()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
         <Stack.Screen
         name='Home'
         component={Home}
         options={{
          title:"Trending Products"
         }}
         />
         <Stack.Screen
         name='Details'
         component={Details}
         options={{
          title:"Product Deatils"
         }}
         />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App