import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Voice() {
  return (
    <SafeAreaView style={{ flex: 1, padding: 20, backgroundColor: "#230E35" }}>
      <StatusBar barStyle={"light-content"} backgroundColor={"#230E35"} />

      <ScrollView
        contentContainerStyle={{ flex: 1, justifyContent: "space-between" }}
      >
        {/* Header */}
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <Ionicons
              name="arrow-back"
              size={24}
              color="white"
              style={styles.icon}
            />
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
              AI Coach{" "}
            </Text>
          </View>

          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <Ionicons
              name="bookmark"
              size={24}
              color="white"
              style={styles.icon}
            />
            <Entypo
              name="dots-three-vertical"
              size={24}
              color="white"
              style={styles.icon}
            />
          </View>
        </View>

        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: 30,
            paddingBottom: 20,
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>
            Go ahead, I'm listening
          </Text>
          <View
            style={{
              width: 270,
              height: 270,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 200,
              shadowColor: "violet",
              elevation: 15,
            }}
          >
            <Image
              source={require("@/assets/appImages/ai.png")}
              style={{ width: 250, height: 250, resizeMode: "contain" }}
            />
          </View>
          <Text style={{ color: "white", textAlign: "center", width: 290 }}>
            Today felt like a mix of small wins and quiet realizations. I
            started the morning feeling sluggish but pushed through by focusing
            on one task at a time...
          </Text>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("@/assets/appImages/wave.png")}
              style={{ width: 60, height: 60, resizeMode: "contain" }}
            />
            <View
              style={{
                width: 120,
                height: 110,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 200,
                shadowColor: "violet",
                elevation: 15,
              }}
            >
              <Image
                source={require("@/assets/appImages/mic.png")}
                style={{ width: 100, height: 100, resizeMode: "contain" }}
              />
            </View>
            <Image
              source={require("@/assets/appImages/wave.png")}
              style={{ width: 60, height: 60, resizeMode: "contain" }}
            />
          </View>

          <View
            style={{
              backgroundColor: "#402e52",
              borderRadius: 8,
              paddingHorizontal: 10,
              gap: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Entypo name="upload" size={22} color="#ccc" />
            <TextInput
              placeholder="Start a new message..."
              placeholderTextColor={"gray"}
              style={{ flex: 1 }}
            />
            <FontAwesome name="send" size={20} color="#ccc" />
            <MaterialCommunityIcons name="waveform" size={26} color="#ccc" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  icon: {
    borderColor: "white",
    borderWidth: 0.5,
    borderRadius: 5,
    padding: 5,
  },
});
