import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { timeDet } from '../components/functions'
import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
const DailyScreen = () => {
  const navigation = useNavigation()
  const [selected, setSelected] = useState(null)
  const [time, setTime] = useState(null)

  async function getSLValue() {
    try {
      const value = await AsyncStorage.getItem('sl');
      await AsyncStorage.setItem('sl', (parseInt(value) + 1).toString());
      
    } catch (error) {
      console.log(error);
    }
    navigation.navigate("Meditation", {time:time})
  }
  
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Daily Meditation",
      headerStyle: {
        backgroundColor: "rgba(0, 0, 0, 0.5)", // 80% opacity black background
      },
      headerTransparent: true,
    });
  }, []);

  return (
      
    <View style={styles.container}>
  <SafeAreaView className="flex-1">
    <View   className="m-3 rounded-lg  flex-row  space-x-2 overflow-hidden" style={{backgroundColor: "rgba(32,32,32,0.5)"}}>
      <Image  className="h-7 w-7 p-7 m-1 rounded-lg bg-white" source={require("../images/med.png")}/>
      <View>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>Daily Meditation</Text>
        <View style={{maxWidth: '90%'}}>
          <Text style={{color: 'white', marginTop: 5}}>Daily meditation is a practice of focusing one's mind on a specific object, thought, or activity to achieve mental clarity, relaxation, and improved overall well-being.</Text>
        </View>
      </View>
    </View>
    <View style={{flex:1}}>
    <View style={{height:115}}>
    <ScrollView showsHorizontalScrollIndicator={false}  horizontal className="m-3 mt-10 rounded-lg  flex-row  space-x-2  p-2" style={{backgroundColor: "#4a4a4a", height:"80%"}}>
        {[3,5,8,10,12,15,20, 25, 30, 40, 50, 60].map((n, index)=>(
            <TouchableOpacity  key={index} onPress={()=>{setSelected(index)
              setTime(n)
            }} style={{ backgroundColor: index==selected ? "white" : "rgba(32,32,32,0.5)"}} className="p-4 rounded-lg">
                <Text className={`${index==selected ? "text-black" : "text-white "} font-bold` } >{n}min</Text>
            </TouchableOpacity>
        ))}

    </ScrollView>
    </View>
    </View>
    <TouchableOpacity disabled={!time} 
    onPress={getSLValue} className={`px-20 py-7 rounded-full m-auto ${selected!=null ? "bg-white" : "bg-gray-400" }`}>
            <Text>Start</Text>
    </TouchableOpacity>
  </SafeAreaView>
</View>


  )
}

const styles =  StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#222222",
  }

})

export default DailyScreen