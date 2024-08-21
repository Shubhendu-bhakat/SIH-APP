import React from "react"
import { View ,Text, Image,StyleSheet } from "react-native"
import Colors from "../../constants/Colors"
import Ionicons from '@expo/vector-icons/Ionicons';


export default function OwnerInfo({pet}){
    return(
        <View style={styles.container}>
                <View style={{
                    display:"flex",
                    flexDirection:"row",
                    alignItems:"center",
                    gap:20
                    }}>
            <Image source={require('./../../assets/images/chat.png')}
            style={{
                width:50,
                height:50,
                borderRadius:99,
            }}
            />
        <View>
            <Text style={{
                fontFamily:'outfit-medium',
                fontSize:17,
                marginLeft:10
            }}>Chat With us </Text>
        </View>
        <Ionicons name="chatbox-ellipses-outline" size={34} color={Colors.PRIMARY} />
        </View>
        
        </View>
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
