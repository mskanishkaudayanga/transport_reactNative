import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
const BigButton = ({name,routingPath}:{name:String,routingPath:any}) => {
    const router = useRouter();
  return (
      <TouchableOpacity
          style={styles.buttonGetStart}
          onPress={() => {
              router.push({ pathname: routingPath });
          }}
      >
          <Text style={styles.buttonText}>{name}</Text>
      </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    buttonGetStart: {
        backgroundColor: '#E38E49',
        width: '90%',
        marginTop: 20,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10, // Optional for rounded corners
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
})
export default BigButton