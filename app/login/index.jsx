import React from "react";
import { Text, View, Image, Pressable, ImageBackground } from "react-native";
import { useCallback } from "react";
import Colors from "./../../constants/Colors";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress = useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow({
          redirectUrl: Linking.createURL("/(tabs)/home", { scheme: "myapp" }),
        });
      if (createdSessionId) {
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  return (
    <ImageBackground
    resizeMode='cover' //stretched or cover which suits use that one 
    source={require("./../../assets/images/image-1.png")}
    style={{
      width: "100%",
      height: "100%",
      flex: 1,
    }}
  >
    <View
      style={{
        height: "100%",
      }}
    >
      <Text
          style={{
            fontFamily: "outfit-bold",
            color:'#FFFFFF',
            fontWeight: 'bold',
            marginTop:50,
            transform: [{ scaleY: 1.5 }],
            fontSize: 30,
            lineHeight: 50,
            textAlign: "center",
            textDecorationLine:'underline',
          }}
        >
            Uncovering the Truth, One Case at a Time
        </Text>

        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 25,
            lineHeight:38,
            marginTop:10,
            textAlign: "center",
            color:'#',
          }}
        >
          Our mission is to make the world a safer place by providing the tools to report, track and stop crime.{" "}
        </Text>
      <View
        style={{
          padding: 20,
          display: "flex",
          alignItems: "center",
          flex: 1,
          justifyContent: 'space-between', 
        }}
      >
       
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 25,
            lineHeight:38,
            marginTop:10,
            textAlign: "center",
            color:'#',
          }}
        >
        
        </Text>

        <Pressable
          style={{
            padding: 14,
            backgroundColor: "#F5C754",
            // marginTop:400,
            bottom:0,
            left:0,
            right:0,
            width: "100%",
            borderRadius: 14,
          }}
          onPress={onPress} //modification from onpress method to onpress()
        >
          <Text
            style={{
              fontFamily: "outfit-medium",
              fontSize: 20,
              textAlign: "center",
            }}
          >
            Get started
          </Text>
        </Pressable>
      </View>
  
    </View>
    </ImageBackground>
  );
}
