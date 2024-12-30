import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import homeIcon from "../../assets/images/material-symbols-light--home-rounded.png";
import newIcon from "../../assets/images/ion--bicycle-outline.png";
import profileIcon from "../../assets/images/iconamoon--profile-fill.png";
import { CounterProvider } from "@/contexts/counterContext";
import { ImageSourcePropType } from "react-native";

const TabIcons = ({
    icon,
    color,
    name,
    focused,
}: {
    icon: ImageSourcePropType;
    color: string;
    name: string;
    focused: boolean;
}) => {
    return (
        <View>
            <Image
                source={icon}
                resizeMode="contain"
                style={{ width: 25, height: 25, tintColor: color }}
            />
        </View>
    );
};

const TabsLayout = () => {
    return (
        <CounterProvider>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: true,
                    tabBarActiveTintColor: "#E38E49",
                    tabBarInactiveTintColor: "black",
                    //headerShown: false, // Disable the default header globally
                }}
            >
                <Tabs.Screen
                    name="home"
                    options={{
                        title: "Home",
                        header: () => <CustomHeader />, // Add your custom header
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcons icon={homeIcon} color={color} name="homee" focused={focused} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="new"
                    options={{
                        title: "New",
                        header: () => <CustomHeader />, // Add your custom header
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcons icon={newIcon} color={color} name="new" focused={focused} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        title: "Profile",
                        header: () => <CustomHeader />, // Add your custom header
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcons icon={profileIcon} color={color} name="profile" focused={focused} />
                        ),
                    }}
                />
            </Tabs>
        </CounterProvider>
    );
};
export default TabsLayout;

const CustomHeader = () => {
    return (
        <View style={headerStyles.container}>
            <Text style={headerStyles.title}>Hi 👋, kanishka</Text>
        </View>
    );
};

const headerStyles = StyleSheet.create({
    container: {
        backgroundColor: "#E38E49",
        height: 60,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 40,
    },
    title: {
        fontSize: 20,
        fontFamily: "Poppins-bold",
        color: "#FFFFFF",
    },
});
