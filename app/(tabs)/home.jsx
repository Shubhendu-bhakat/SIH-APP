import React, { useState } from "react"
import { View ,Text,StyleSheet, TouchableOpacity, ScrollView } from "react-native"
import Header from "../../components/Home/Header"
import Slider from "../../components/Home/Slider"
import PetListByCatagory from "../../components/Home/PetListByCatagory"
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Colors from "../../constants/Colors"
import Search from "../../components/Home/search"


export default function Home(){
    return(

    <ScrollView style={{
        padding:20,
        marginTop:20,
        backgroundColor:'#121C24'
    }}>
    {/* //    home */}
    <Header/>

    {/* srarch bar and icon */}

    <Search/>

    {/* slider */}

    <Slider/>

    {/* pet list by catagory */}
    <PetListByCatagory />

    </ScrollView>
    )
}

const styles = StyleSheet.create({
  addnewPetCont:{
    padding:20,
    gap:10,
    display:"flex",
    flexDirection:"row",
    backgroundColor:Colors.LIGHT_PRIMARY,
    marginTop:20,
    borderWidth:1,
    borderColor:Colors.PRIMARY,
    borderStyle:"dashed",
    borderRadius:5,
    justifyContent:"center"
  },
  addPetText:{
    fontFamily:'outfit-medium',
        color:Colors.PRIMARY,
        fontSize:18
  }
})
