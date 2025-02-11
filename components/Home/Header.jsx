import { useUser } from "@clerk/clerk-expo";
import React from "react";
import { View, Text, Image } from "react-native";
import Colors from "../../constants/Colors";

export default function Header() {
  const { user } = useUser();
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom:10,
        
      }}
    >
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 18,
          color:'#F7FAFA'
        }}
      >
        Welcome
      </Text>
      <Text ///user account name size should be moddified from 9 to 25
        style={{
          fontFamily: "outfit-medium",
          fontSize: 9,
          color:'#F7FAFA'
        }}
      >
        {user?.fullName}
      </Text>
      <Image
        source={{ uri: user?.imageUrl }}
        style={{ width: 40, height: 44, borderRadius: 99 ,padding:20}}
        
      />
    </View>
  );
}
