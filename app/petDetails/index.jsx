import { useLocalSearchParams, useNavigation } from "expo-router"
import React, { useEffect } from "react"
import { View ,Text, Image, ScrollView,StyleSheet, TouchableOpacity } from "react-native"
import PetInfo from "../../components/petDetailsPages/PetInfo";
import PetSubInfo from "../../components/petDetailsPages/PetSubInfo";
import AboutPet from "../../components/petDetailsPages/AboutPet";
import { SafeAreaView } from "react-native-safe-area-context";
import OwnerInfo from "../../components/petDetailsPages/OwnerInfo";
import Colors from "../../constants/Colors";


export default function PetDetails(){
    const pet = useLocalSearchParams();
    const navigation = useNavigation();
    useEffect(()=>{
        navigation.setOptions({
            headerTransparent:true,
            headerTitle:''
        },[])
    })
    return(
        
        <View>
            <ScrollView>
            {/* pet info */}
                <PetInfo pet={pet}/>

                {/* pet subInfo */}
                <PetSubInfo pet={pet}/>
                
                {/* about pet details */}
                <AboutPet pet={pet}/>
               

                {/* owner info */}
                <OwnerInfo pet={pet} />
                <View style={{height:70}}>

                </View>

                </ScrollView>

                {/* adopt me button */}
                <View style={styles.bottomCont}>
                <TouchableOpacity style={styles.adoptbtn}>
                    <Text style={{textAlign:"center",
                        fontFamily:'outfit-medium',
                        fontSize:20
                    }}>Adopt Me</Text>
                </TouchableOpacity>
                </View>

        </View>
        
       
    )
}

const styles = StyleSheet.create({
  adoptbtn:{
    padding:15,
    backgroundColor:Colors.PRIMARY
  },
  bottomCont:{
    position:'absolute',
    width:'100%',
    bottom:0
  }
})
