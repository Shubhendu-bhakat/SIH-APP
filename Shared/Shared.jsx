import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore"
import { db } from './../config/FirebaseConfig'
export const GetFavList = async (user) => {
    const docSnap = await getDoc(doc(db, 'userFavPet', user?.primaryEmailAddress?.emailAddress));
    if (docSnap?.exists()) {
        return docSnap.data();
    }
    else {
        await setDoc(doc(db, 'userFavPet', user?.primaryEmailAddress?.emailAddress), {
            email: user?.primaryEmailAddress?.emailAddress,
            favorites: []
        })
    }
}
const Updatefav=async( user ,favorites)=>{
    const docRef = doc(db,'userFavPet',user?.primaryEmailAddress?.emailAddress);
    try{
        await updateDoc(docRef,{
            favorites:favorites
        })
    }catch(e){
        console.log(e);
    }
}
export default {
    GetFavList,
    Updatefav
}