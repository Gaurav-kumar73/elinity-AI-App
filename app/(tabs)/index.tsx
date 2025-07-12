import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, padding: 20, backgroundColor: "#230E35" }}>
      <StatusBar barStyle={"light-content"} backgroundColor={"#230E35"} />

      <ScrollView>
        
        {/* Header */}
        <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
          <Ionicons
            name="arrow-back"
            size={24}
            color="white"
            style={{
              borderColor: "white",
              borderWidth: 0.5,
              borderRadius: 5,
              padding: 5,
            }}
          />
          <TextInput
            placeholder="Search..."
            placeholderTextColor={"gray"}
            style={{
              flex: 1,
              backgroundColor: "#402e52",
              borderRadius: 5,
              paddingHorizontal: 20,
            }}
          />
          <Feather
            name="bell"
            size={24}
            color="white"
            style={{
              borderColor: "white",
              borderWidth: 0.5,
              borderRadius: 5,
              padding: 5,
            }}
          />
        </View>

        <View style={{ flex: 1 }}>
          <Image
            source={require("@/assets/appImages/scenery.png")}
            style={{ width: "100%", height: 300, resizeMode: "contain" }}
          />

          <ImageBackground
            source={require("@/assets/appImages/cardBackground.png")}
            style={{
              flex: 1,
              borderRadius: 20, // <--- Apply borderRadius here
              overflow: "hidden", // <--- IMPORTANT: This clips content to the borderRadius
              alignItems: "center",
              padding: 10,
              gap: 10,
            }}
          >
            <Text style={{ color: "white" }}>AI Questions</Text>
            <Text style={{ color: "#ccc" }}>Take a moment to reflect...</Text>
            <Text
              style={{
                color: "white",
                width: 250,
                fontWeight: "bold",
                fontSize: 20,
                textAlign: "center",
              }}
            >
              If you could instantly master any skills, what would it be?
            </Text>
            <TextInput
              placeholder="Type in your answer"
              placeholderTextColor={"#ccc"}
            />

            <View style={{ flexDirection: "row", gap: 20 }}>
              <AntDesign name="retweet" size={22} color="white" />
              <FontAwesome name="microphone" size={22} color="white" />
            </View>

            <View style={{ flexDirection: "row", gap: 5 }}>
              <Text style={styles.tag}>Self-Reflection</Text>
              <Text style={styles.tag}>Relationship</Text>
              <Text style={styles.tag}>Compatibility</Text>
            </View>
          </ImageBackground>

          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 12,
              marginTop: 10,
              alignItems: "center",
            }}
          >
            <View
              style={{ flexDirection: "row", gap: 12, alignItems: "center" }}
            >
              <Text
                style={{
                  backgroundColor: "white",
                  borderRadius: 8,
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  fontWeight: "bold",
                }}
              >
                Next
              </Text>
              <Ionicons
                name="star-outline"
                size={24}
                style={{
                  backgroundColor: "white",
                  borderRadius: 8,
                  padding: 7,
                  fontWeight: "bold",
                }}
              />
            </View>
            <Text
              style={{
                backgroundColor: "white",
                borderRadius: 8,
                paddingHorizontal: 15,
                paddingVertical: 10,
                fontWeight: "bold",
              }}
            >
              Add a Note
            </Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tag: {
    color: "white",
    backgroundColor: "gray",
    padding: 8,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    opacity: 0.3,
  },
});
