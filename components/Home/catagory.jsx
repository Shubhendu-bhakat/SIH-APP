import { collection, getDocs } from "firebase/firestore"
import React, { useEffect, useState } from "react"
import { View ,Text, FlatList, Image,StyleSheet, TouchableOpacity } from "react-native"
import { db } from "../../config/FirebaseConfig"
import Colors from './../../constants/Colors'


export default function Catagory({catagory}){
const [CatagoryList ,setCatagoryList] =useState([]);
const [selectedCatagory,setSelectedCatagory] = useState("bird");
    useEffect(()=>{
        GetCatagory();
    },[])
    //fetching catagory images from firebase
    const GetCatagory =async()=>{
        setCatagoryList([]);
        const snapshot = await getDocs(collection(db,'Catagory'));
        snapshot.forEach((doc)=>{
            setCatagoryList(CatagoryList=>[...CatagoryList,doc.data()])
        })
    }
    return(
        <View style={{
            marginTop:20,
        }} >
            <Text style={{
                fontFamily:'outfit-medium',
                fontSize:20,
                color:'#fff'
            }} >Catagory </Text>

            <FlatList 
            data={CatagoryList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item,index})=>(
                <TouchableOpacity 
                onPress={()=>{
                    setSelectedCatagory(item.name);
                    catagory(item.name);
                }}
                style={{
                    flex:1,
                }}>
                    <View style={[styles.container,
                        selectedCatagory==item.name && styles.selectedCatagoryCont
                    ]} >
                        <Image source={{uri:item?.imageUrl}} style={{
                            width:40,
                            height:40,
                        }}/>
                    </View>
                 <Text style={{
                    textAlign:"center",
                    fontFamily:'outfit',
                    color:'#fff'
                 }}>{item?.name}</Text>   
                </TouchableOpacity>
            )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: Colors.LIGHT_PRIMARY,
    padding:15,
    alignItems:'center',
    borderWidth:1,
    borderRadius:15,
    borderColor:'#000',
    margin:5,

  },
  selectedCatagoryCont :{
    backgroundColor:Colors.COLOR_SELECTED,
    borderColor:Colors.SECONDARY,
  }
})
