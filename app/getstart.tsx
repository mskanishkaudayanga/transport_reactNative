import { View, StyleSheet, Dimensions, Text, Animated, TouchableOpacity } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import LottieView from 'lottie-react-native';
import BigButton from './components/button';
const GetStart = () => {
 
    const { height } = Dimensions.get('window'); 
    const [loading, setLoading] = useState(true);
    const [textIndex, setTextIndex] = useState(0);
    const fadeAnim = useRef(new Animated.Value(0)).current; 
    const letters = "Explore Stations and Bikes Near You!".split(""); 
    const [animatedText, setAnimatedText] = useState("");
    useEffect(() => {
        let textTimer: string | number | NodeJS.Timeout | undefined;
        if (textIndex < letters.length) {
            textTimer = setTimeout(() => {
                setAnimatedText((prev) => prev + letters[textIndex]);
                setTextIndex((prev) => prev + 1);
            }, 200); 
        } else {
            // Once the text is fully displayed, start fading in the content
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1000, // Fade-in duration
                useNativeDriver: true,
            }).start();
        }
        return () => clearTimeout(textTimer);
    }, [textIndex]);

    // Overall loading timeout
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 5000); // 5 seconds delay
    }, []);
    return (
        loading ? (
            <View style={[styles.container, { height }]}>
                <LottieView
                    source={require('../assets/animations/Animation - 1733147877938.json')}
                    autoPlay
                    loop
                    style={{ width: 300, height: 300 }}
                />
            </View>
        ) : (
            <View style={[styles.container, { height }]}>
                <LottieView
                    source={require('../assets/animations/bike.json')}
                    autoPlay={true}
                    loop
                    style={{ width: 300, height: 300 }}
                />
                <View style={styles.container2}>
                    
                    <Text style={styles.headingText}>
                        {animatedText.split(" ").map((word, index) => (
                            <Text
                                key={index}
                                style={word === "Near" || word === "You!" ? styles.highlightText : null}
                            >
                                {word}{" "}
                            </Text>
                        ))}
                    </Text>
                    {/* Opacity animation for description and button */}
                    <Animated.View style={[styles.fadeInContent, { opacity: fadeAnim }]}>
                        <Text style={styles.description}>
                            Some Small Description about our app and how it works. Some Small
                            Description about our app and how it works.
                        </Text>
                            <BigButton name="Get Started" routingPath="/register" />
                    </Animated.View>
                </View>
            </View>
        )
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container2: {
        width: '100%',
        height: '50%',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    description: {
        color: '#133E87',
        width: '90%',
        textAlign: 'center',
        fontSize: 15,
    },
    headingText: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#091057',
        width: '90%',
        textAlign: 'left',
    },
    highlightText: {
        color: '#FF7F3E', // Highlight color for "Near You"
    },
    fadeInContent: {
        alignItems: 'center',
        width: '100%',
    },
});

export default GetStart;
