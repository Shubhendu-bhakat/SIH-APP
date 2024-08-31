import React, { useState } from "react"
import { View ,Text,StyleSheet, TouchableOpacity } from "react-native"
import Header from "../../components/Home/Header"
import Slider from "../../components/Home/Slider"
import PetListByCatagory from "../../components/Home/PetListByCatagory"
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Colors from "../../constants/Colors"


export default function Home(){
    return(

    <View style={{
        padding:20,
        marginTop:20,
        backgroundColor:Colors.BACKGROUND
    }}>
    {/* //    home */}
    <Header/>
    {/* slider */}
    <Slider/>

    {/* pet list by catagory */}
    <PetListByCatagory/>

    {/* add new pet */}

    <TouchableOpacity style={styles.addnewPetCont}>
    <MaterialIcons name="pets" size={24} color="black" />
    <Text style={styles.addPetText}>Add New pet</Text>
    </TouchableOpacity>

    </View>
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
