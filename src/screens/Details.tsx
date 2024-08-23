import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'


// navigation 
import { NativeStackScreenProps} from "@react-navigation/native-stack"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from '../App'
import { useNavigation } from '@react-navigation/native'

type DeatilsProps = NativeStackScreenProps<RootStackParamList,"Details">

const Details = ({route}:DeatilsProps) => {
 
  const {productId} =route.params

 const navigation =useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Details :{productId}</Text>
    <Button 
    title='Go to home'
    onPress={() => navigation.navigate("Home")}
    />
     <Button 
    title='Go to first screen'
    onPress={() => navigation.popToTop()}
    />
    </View>
    
    
  )
}

export default Details

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    smallText:{
        color:"#000000"
    }
})