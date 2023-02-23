import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { timeDet } from '../components/functions'

const HomeScreen = () => {
  const navigation = useNavigation()

  

  useLayoutEffect(() => {
    navigation.setOptions({
      title: timeDet(),
      headerStyle: {
        backgroundColor: "rgba(0, 0, 0, 0.5)", // 80% opacity black background
      },
      headerTransparent: true,
    });
  }, []);

  return (
    // <View   className="bg-[#222222] flex-1 ">
      
    // </View>
    <View style={styles.container}>
  <ImageBackground
    source={require("../images/ee3.png")}
    resizeMode="cover"
    style={{ flex: 1 }}
  >
    <View
      style={{
        flex: 1,
        backgroundColor: "rgba(32,32,32,0.4)",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
    />
    <SafeAreaView className="flex-1">
      <View style={{height:200}}>
      <ScrollView className="" style={{flex:1}}>
      <TouchableOpacity activeOpacity={.7} onPress={()=> navigation.navigate("Daily")} className="m-3 rounded-lg  flex-row items-center space-x-2 overflow-hidden" style={{backgroundColor: "rgba(32,32,32,0.5)"}} >
        <Image  className="h-7 w-7 p-7 m-1 rounded-lg bg-white" source={require("../images/med.png")}/>
        <Text className="text-white font-extrabold text-xl">Daily Meditation</Text>
      </TouchableOpacity>
      
      </ScrollView>
      </View>
      
      </SafeAreaView>
      <View  style={{backgroundColor: "rgba(32,32,32,0.8)", height:130, flexDirection: "row", justifyContent:"space-evenly", alignItems:"start", }}>
        <View className="p-4 items-center space-y-2 rounded-lg mt-2" style={{backgroundColor: "rgba(32,32,32,0.8)"}}>
          <Text className="text-white text-lg font-bold">0d</Text>
          <Text className="text-white">Current</Text>
          <Text className="text-white">streak</Text>
        </View>
        <View className="p-4 items-center space-y-2 rounded-lg mt-2" style={{backgroundColor: "rgba(32,32,32,0.8)"}}>
          <Text className="text-white text-lg font-bold">0d</Text>
          <Text className="text-white">Minutes</Text>
          <Text className="text-white">Lasted</Text>
        </View>
        <View className="p-4 items-center space-y-2 rounded-lg mt-2" style={{backgroundColor: "rgba(32,32,32,0.8)"}}>
          <Text className="text-white text-lg font-bold">0d</Text>
          <Text className="text-white">Longest</Text>
          <Text className="text-white">streak</Text>
        </View>
        <View className="p-4 items-center space-y-2 rounded-lg mt-2" style={{backgroundColor: "rgba(32,32,32,0.8)"}}>
          <Text className="text-white text-lg font-bold">0d</Text>
          <Text className="text-white">Sessions</Text>
          <Text className="text-white">Listened</Text>
        </View>

        
      </View>
  </ImageBackground>
</View>

  )
}

const styles =  StyleSheet.create({
  container:{
    flex:1,
  }

})

export default HomeScreen