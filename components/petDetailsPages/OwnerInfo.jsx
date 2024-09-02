import React from "react"
import { View ,Text, Image,StyleSheet, TouchableOpacity } from "react-native"
import Colors from "../../constants/Colors"
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from "expo-router";


export default function OwnerInfo({pet}){
    const routChange =()=>{
        const router = useRouter();
        router.push({
            pathname:'/(tabs)/inbox'
        })
    }
    return(
       <>
       </>
    )
}

const styles = StyleSheet.create({
  container:{
    marginHorizontal:20,
    paddingHorizontal:20,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:20,
    borderWidth:1,
    borderRadius:15,
    padding:20,
    borderColor:Colors.PRIMARY,
    backgroundColor:Colors.WHITE,
    justifyContent:'space-around'

  }
})
