import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";
import {useRouter} from 'expo-router'

export default function PetListItem({ pet }) {
  const router  = useRouter();
  return (
    <TouchableOpacity
      onPress={()=>router.push({
          pathname:'/petDetails',
          params:pet
      })}
      style={{
        padding: 10,
        marginRight: 15,
        backgroundColor: Colors.WHITE,
        borderRadius: 10,
      }}
    >
      <Image
        source={{ uri: pet?.imageUrl }}
        style={{
          width: '100%',
          height: 135,
          objectFit: "cover",
          borderRadius: 10,
        }}
      />
      <Text
        style={{
          fontFamily: "outfit-medium",
          fontSize: 18,
        }}
      >
        {pet?.name}
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding:20
        }}
      >
        <Text
          style={{
            color: Colors.GRAY,
            fontFamily: "outfit",
          }}
        >
          {pet?.breed}
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            color: Colors.PRIMARY,
            paddingHorizontal: 7,
            fontSize: 11,
            backgroundColor: Colors.LIGHT_PRIMARY,
          }}
        >
          {pet.age}
        </Text>
      </View>
      <View style={{
        height:10,
        backgroundColor:'#000',
        width:'100%'
      }}>

      </View>
     
    </TouchableOpacity>
  );
}
