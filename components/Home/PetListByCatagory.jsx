import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import Catagory from "./catagory";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/FirebaseConfig";
import PetListItem from "./petListItem";

export default function PetListByCatagory() {
  const [petList, setPetList] = useState([]);
  const [loader,setLoader] = useState(false);
  useEffect(()=>{
    GetPetList('bird');
  },[])
  //fetching the data from firebase using querries

  const GetPetList = async (catagory) => {
    setLoader(true);
    setPetList([]);
    const q = query(collection(db, "Pets"),where("catagory", "==", catagory)); //default if catagory is not selected then it will be bired
    const querysnapshot = await getDocs(q);
    querysnapshot.forEach((doc) => {
      setPetList(petList=>[...petList,doc.data()]);
    });
    setLoader(false);
  };
  return (
    <View>
      <Catagory catagory={(value) => GetPetList(value)} />
        <FlatList 
        style={{
            marginTop:10,
            padding:10
        }}
        refreshing={loader}
        onRefresh={()=>{GetPetList('bird')}}
        data={petList}
        renderItem={({item,index})=>(
            <PetListItem pet={item} />
        )}/>
    </View>
  );
}
