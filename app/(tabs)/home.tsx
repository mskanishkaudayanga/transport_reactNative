import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native'
import React from 'react'
import ListCard from '../components/ListCard'

const home = () => {
  const { height } = Dimensions.get('window');
  const data = [{ key: '1' }];
  return (
    <View style={[styles.mainView, { height }]}>
      <FlatList
        data={data}
        renderItem={({ item }) => <ListCard />}
        keyExtractor={item => item.key}
        contentContainerStyle={styles.contentContainer} // Center the content
      />
    </View>
  )
}

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    display: 'flex',
    backgroundColor: 'white',
  },
  contentContainer: {
    flexGrow: 1, // Ensures the container takes the full height
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default home;
