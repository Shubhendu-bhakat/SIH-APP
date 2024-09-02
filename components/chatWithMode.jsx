// import React from "react"
// import { View ,Text } from "react-native"
// import { useState } from "react"
// import { GoogleGenerativeAI } from "@google/generative-ai"
// import MyComponent from "../app/chat"


// export default function ChatWithModel(){
//     const chatWithAi=()=>{
//         const apiKey = new GoogleGenerativeAI('AIzaSyAKapMCNUwNdQIHHy2T8k2SQ_4F08k1xgI');
//         const [search,setSearch] = useState('');
//         const [aiResponce, setResponce] = useState('');
//         const [loading,setLoading] = useState('');
//         async function aiRun(){
//             const model = apiKey.getGenerativeModel({model:'gemini-pro'})
//             const prompt = 
//             const responce = await model.generateContent(prompt);
//             const text = responce.text();
//             setResponce(text);
//             setLoading(false);
//         }
//         const handelChangeSearch =(e)=>{
//             setSearch(e.target.value);
//         }
//         const handleClick =()=>{
//             aiRun();
//         }
//     }
//     return(
//         <View>
//             <MyComponent/>
//         </View>
//     )
// }