import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FloatingCounter = ({ count }: { count: number }) => {
    return (
        <View style={styles.floatingCounter}>
            <Text style={styles.counterText}>{count}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    floatingCounter: {
        position: 'absolute',
        right: 20,
        top: 650,
        backgroundColor: '#E38E49',
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    counterText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default FloatingCounter;
