import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useLayoutEffect } from 'react';
import { Audio } from 'expo-av';

const MeditationScreen = ({route, navigation}) => {
    const { time } = route.params;
    const [paused, setPaused] = useState(false);
    const [remainingTime, setRemainingTime] = useState(time * 60);
    const [sound, setSound] = useState(null);
    
    useLayoutEffect(() => {
        navigation.setOptions({
          title: "Daily Meditation",
          headerStyle: {
            backgroundColor: "rgba(0, 0, 0, 0.5)", // 80% opacity black background
          },
          headerTransparent: true,
        });
    }, []);

    useEffect(() => {
        let interval;
        console.log(minutes)
        if (!paused) {
            interval = setInterval(() => {
                setRemainingTime(prevTime => prevTime - 1);
            }, 1000);
        }
        if (remainingTime === 0) {
            clearInterval(interval);
            playSound();
        }

        return () => clearInterval(interval);
    }, [paused, remainingTime]);

    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    const handlePress = () => {
        setPaused(!paused);
    };

    const playSound = async () => {
        try {
            const { sound } = await Audio.Sound.createAsync(
                require('../images/alarm.mp3')
            );
            setSound(sound);
            await sound.playAsync();
        } catch (error) {
            console.log('Error playing sound: ', error);
        }
    }

    return (
        <View className={`flex-1 justify-center items-center ${ paused ? "bg-[#5b5b5b]" : "bg-[#222222]"}`}>
            <TouchableOpacity onPress={handlePress}  style={{width: 188, padding:40}} >
                <Text  style={{fontSize: 48, color:"white"}}>
                    {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default MeditationScreen;
