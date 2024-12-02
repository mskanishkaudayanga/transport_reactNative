import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs,Redirect } from 'expo-router'
import homeIcon from '../../assets/images/home.png'

const TabIcons =({icon, color, name, focused}: {icon: string, color: string, name: string, focused: boolean})=>{
    return (
        <View>
           <Image
            source={homeIcon}
            resizeMode='contain'
            tintColor={color}
            style={{width: 25, height: 25}}
           />
        </View>
    )
}

const TabsLayout = () => {
  return (
 <Tabs
    screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'grey',
    }}
>
    <Tabs.Screen
        name="home"
        options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color,focused }) => (
             <TabIcons icon={homeIcon} color={color} name="homee" focused={focused} />
            )
        }}
        />
         <Tabs.Screen
        name="new"
        options={{
            title: 'new',
            headerShown: false,
            tabBarIcon: ({ color,focused }) => (
             <TabIcons icon={homeIcon} color={color} name="new" focused={focused} />
            )
        }}
        />
         <Tabs.Screen
        name="profile"
        options={{
            title: 'profile',
            headerShown: false,
            tabBarIcon: ({ color,focused }) => (
             <TabIcons icon={homeIcon} color={color} name="profile" focused={focused} />
            )
        }}
        />
 </Tabs>
  )
}

export default TabsLayout