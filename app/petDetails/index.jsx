import { useLocalSearchParams, useNavigation, useRouter } from "expo-router"
import React, { useEffect } from "react"
import { View ,Text, Image, ScrollView,StyleSheet, TouchableOpacity } from "react-native"
import PetInfo from "../../components/petDetailsPages/PetInfo";
import PetSubInfo from "../../components/petDetailsPages/PetSubInfo";
import AboutPet from "../../components/petDetailsPages/AboutPet";
import { SafeAreaView } from "react-native-safe-area-context";
import OwnerInfo from "../../components/petDetailsPages/OwnerInfo";
import Colors from "../../constants/Colors";
import { useUser } from "@clerk/clerk-expo";
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { db } from "../../config/FirebaseConfig";


export default function PetDetails(){
    const pet = useLocalSearchParams();
    const navigation = useNavigation();
    const {user} = useUser();
    const router = useRouter();
    useEffect(()=>{
        navigation.setOptions({
            headerTransparent:true,
            headerTitle:''
        },[])
    })

    // const initiateChat=async()=>{
    //     const docId1 = user?.primaryEmailAddress?.emailAddress+'_'+pet?.email;
    //     const docId2 = pet?.email+'_'+user?.primaryEmailAddress?.emailAddress;

    //     const q = query(collection(db,'Chat'),where('id','in',[docId1,docId2]));
    //     const querrySnapshort = await getDocs(q);
    //     querrySnapshort.forEach(doc=>{
    //         console.log(doc.data());
    //         router.push({
    //             pathname:'/chat',
    //             params:{id:doc.id}
    //         })
    //     })
    //     if(querrySnapshort.docs.length==0){
    //         await setDoc(doc(db,'Chat',docId1),{
    //             id:docId1,
    //             users:[
    //                 {
    //                     email:user?.primaryEmailAddress?.emailAddress,
    //                     imageUrl:user?.imageUrl,
    //                     name:user?.fullName
    //                 },
    //                 {
    //                     email:pet?.email,
    //                 }
    //             ]
    //         });
          
    //     }
    // }
    const makeTransition =()=>{
        router.push({
            pathname:'/(tabs)/inbox',
        })
    }
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
                <TouchableOpacity
              onPress={ makeTransition}
                 style={styles.adoptbtn}>
                    <Text style={{textAlign:"center",
                        fontFamily:'outfit-medium',
                        fontSize:20
                    }}>Ask Questions</Text>
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
