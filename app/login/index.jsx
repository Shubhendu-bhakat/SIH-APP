import React from "react";
import { Text, View, Image, Pressable, ImageBackground, ScrollView } from "react-native";
import { useCallback } from "react";
import Colors from "./../../constants/Colors";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";
import Ionicons from '@expo/vector-icons/Ionicons';

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
    <ScrollView
      style={{
        height: "100%",
        backgroundColor: "#121C24",
      }}
    >
      <ImageBackground
        resizeMode="cover" //stretched or cover which suits use that one
        source={require("./../../assets/images/image-1.png")}
        style={{
          width: "100%",
          height: "100%",
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <Text
            style={{
              fontFamily: "outfit-bold",
              color: "#FFFFFF",
              fontWeight: "bold",
              marginTop: 50,
              transform: [{ scaleY: 1.5 }],
              fontSize: 35,
              lineHeight: 50,
              textAlign: "center",
              marginBottom: 80,
            }}
          >
            Uncovering the Truth, One Case at a Time
          </Text>

          <Pressable
            style={{
              padding: 14,
              marginLeft: 15,
              backgroundColor: "#F5C754",
              bottom: 0,
              left: 0,
              right: 0,
              width: "30%",
              borderRadius: 14,
              marginBottom:10,
            }}
            onPress={onPress} //modification from onpress method to onpress()
          >
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 15,
                textAlign: "center",
              }}
            >
              Get started
            </Text>
          </Pressable>
        </View>
      </ImageBackground>

      <View
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text
            style={{
              color: "#F7FAFA",
              padding: 20,
              fontSize: 24,
              display: "flex",
              fontFamily:'outfit-bold',
              alignContent: "flex-start",
            }}
          >
            Why we Do This?
          </Text>

          <Text  style={{
              color: "#F7FAFA",
              padding: 20,
              fontSize: 16,
              fontFamily:'outfit-medium',
              display: "flex",
              alignContent: "flex-start",
            }}>
            We believe that anyone should be able to report a crime without fear
            of retaliation. We strive to provide a safe and secure platform for
            reporting and tracking crimes.
          </Text>
          <Text
            style={{
              color: "#F7FAFA",
              padding: 20,
              fontSize: 24,
              fontFamily:'outfit-bold',
              alignContent: "flex-start",
              marginBottom:10
            }}
          >
           How you can help
          </Text>

            <View style={{
              display:'flex',
              flexDirection:'row',
              padding:5
            }}>
              <Ionicons name="search-circle-outline" size={40} color="#fff" style={{
                backgroundColor:'#29384D',
                height:48,
                marginLeft:10,
                width:48,
                marginTop:3,
              }}/>
              <Text style={{
               color: "#F7FAFA",
               padding: 10,
               fontSize: 16,
               fontFamily:'outfit-medium',
               alignContent: "flex-start",

              }}>
                Report a crime{'\n'}
               <Text style={{
                color:'#8A9EBF',
                padding:4
               }}>
               If you see something, say something
                </Text> 
               
              </Text>
            </View>

            <View style={{
              display:'flex',
              flexDirection:'row',
              padding:5
            }}>
            <Ionicons name="location-outline" size={40} color="#fff" style={{
               backgroundColor:'#29384D',
               height:48,
               marginLeft:10,
               width:48,
               marginTop:3,
              
            }} />
             <Text style={{
               color: "#F7FAFA",
               fontSize: 16,
               padding:10,
               fontFamily:'outfit-medium',
               alignContent: "flex-start",

              }}>
                Report a crime{'\n'}
                <Text style={{
                color:'#8A9EBF',
                padding:4
               }}>
               Stay informed about what's happening{'\n'}in your neighborhood
                </Text> 
              </Text>
            </View>
            <View style={{
              display:'flex',
              flexDirection:'row',
              padding:5
            }}>
              <Ionicons name="search-circle-outline" size={40} color="#fff" style={{
                backgroundColor:'#29384D',
                height:48,
                marginLeft:10,
                width:48,
                marginTop:3,
              }}/>
              <Text style={{
               color: "#F7FAFA",
               padding: 10,
               fontSize: 16,
               fontFamily:'outfit-medium',
               alignContent: "flex-start",

              }}>
                Help solve a crime{'\n'}
               <Text style={{
                color:'#8A9EBF',
                padding:4
               }}>
               Submit tips and evidence to help{'\n'} law enforcement 
                </Text> 
               
              </Text>
            </View>

        </View> 

      </View>
    </ScrollView>
  );
}
