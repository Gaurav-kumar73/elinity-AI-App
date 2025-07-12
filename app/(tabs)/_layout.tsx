import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        // tabBarLabelStyle: { fontSize: 12, color:'cyan' },
        tabBarStyle: {
          backgroundColor: "#191934",
          borderRadius: 12,
          marginHorizontal: 20,
          marginBottom: 40,
          height: 55,
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          borderWidth: 1,
          borderColor: "#ccc",
        },
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
        },
        tabBarActiveTintColor: "white",
        // tabBarActiveBackgroundColor:"#1F3C5F",
        tabBarInactiveTintColor: "gray",
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? "home" : "home-outline"} size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="voice"
        options={{
          tabBarLabel: "Voice",
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome name={focused ? "microphone" : "microphone"} size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? "person" : "person-outline"} size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          tabBarLabel: "More",
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons name="chart-box-plus-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({});