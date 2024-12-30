import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import Getstart from './getstart';
import { CounterProvider } from '@/contexts/counterContext';


const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <CounterProvider>
      <SafeAreaView style={styles.SafeArea}>
        <ScrollView style={styles.ScrollView}>
          <View style={styles.view1}>
            <Getstart />
          </View>
        </ScrollView>
      </SafeAreaView>
      </CounterProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  SafeArea: {
    backgroundColor: 'white',
    height: '100%',
  },
  ScrollView: {
    height: '100%',
  },
  view1: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    height: '100%',
    paddingRight: 5,
  },
  text: {
    color: 'white', // Moved here
    fontSize: 20, // Moved here
    textAlign: 'center', // Optional for centering text
  },
});

export default App;
