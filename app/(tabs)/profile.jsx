import React from "react"
import { View ,Text, Image, FlatList } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import { useUser } from "@clerk/clerk-expo";
import Colors from "../../constants/Colors";


export default function Profile(){
    const Menu =[
        {
            id:1,
            name:'ellipsis-horizontal-circle',
            icon:'inbox',
            path:'/(tabs)/inbox'
        },
        {
            id:2,
            name:'heart-sharp',
            icon:'Favorites',
            path:'/(tabs)/favorites'
        },
        {
            id:3,
            name:'exit',
            icon:'logout',
            path:'logout'
        }
    ]
    const {user} = useUser();
    return(
        <View style={{
            padding: 20,
            marginTop: 20,
        }}>
            <Text style={{
                fontFamily: 'outfit-medium',
                fontSize: 30,
            }}>Profile</Text>

            <View style={{
                display: 'flex',
                alignItems: 'center',
                marginVertical: 25,
            }}>
                <Image source={{ uri: user?.imageUrl }} style={{
                    width: 80,
                    height: 80,
                    borderRadius: 99,
                }} />
                <Text style={{
                    fontFamily:'outfit-bold',
                    fontSize:20,
                    marginTop:6
                }}>{user?.fullName}</Text>
                <Text style={{
                    fontFamily:'outfit',
                    fontSize:16,
                    color:Colors.GRAY
                }}>{user?.primaryEmailAddress?.emailAddress}</Text>
            </View>

            <FlatList 
            
            data={Menu}
            renderItem={({item,index})=>(
                <View
                key={index}
                style={{
                    marginVertical:15,
                    display:'flex',
                    flexDirection:'row',
                    alignItems:'center',
                    gap:10
                }}>
                    <Ionicons name={item?.name} size={35}
                    style={{
                        padding:10,
                        backgroundColor:Colors.LIGHT_PRIMARY,
                        borderRadius:10,
                    }}
                    color={Colors.PRIMARY} />
                    <Text style={{
                        fontFamily:'outfit',
                        fontSize:20
                    }}>{item?.icon}</Text>
                </View>
             )}
            />

        </View>
    )
}