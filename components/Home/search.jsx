import React, { useState } from "react"
import { View ,Text, Pressable } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import { GestureHandlerRootView, TextInput } from "react-native-gesture-handler";



export default function Search(){
    const [input,setInput] = useState('');
    const searchCase=()=>{
        //function for searing the case using the regex
    }
    return(
        <GestureHandlerRootView style={{
            height:60,
            width:'100%',
            borderRadius:20,
            display:'flex',
            flexDirection:'row',
            backgroundColor:'#33405C',
            alignItems:'center',
        }} >

        
        
           <Ionicons name="search" size={30} color="#F5C754" onPress={searchCase} style={{
            padding:5
           }} />
          <TextInput placeholder="Search" 
          cursorColor={'#F5C754'}
           value={setInput}
           onChangeText={(text)=>{setInput(text)}}
          style={{
            color:'#fff'
          }}>
            
          </TextInput>
        </GestureHandlerRootView>
    )
}