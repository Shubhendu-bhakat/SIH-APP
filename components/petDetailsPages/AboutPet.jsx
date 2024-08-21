import React, { useState } from "react"
import { View ,Text,ScrollView } from "react-native"


export default function AboutPet({pet}){
    return(
          
        <View style={{padding:20}}>
            <Text style={{
                fontFamily:'outfit-medium',
                fontSize:23,
            }}>{pet?.name}</Text>

            <Text  style={{
                fontFamily:'outfit-medium',
                fontSize:13,

            }}>{pet?.about}</Text>
        </View>
      
    )
}