import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
  return (
    <SafeAreaView style={{ flex: 1, padding: 15, backgroundColor: "#141749" }}>
      <StatusBar barStyle={"light-content"} backgroundColor={"#141749"} />

      <ScrollView contentContainerStyle={{gap:20}}>
        {/* Header */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
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
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 22 }}>
            My Profile
          </Text>
          <Text></Text>
        </View>

        <LinearGradient
          colors={["#28103c", "#351551"]}
          start={{ x: 0.5, y: 0.1 }}
          style={{
            padding: 15,
            borderRadius: 15,
            gap: 12,
            borderWidth: 2,
            borderColor: "indigo",
          }}
        >
          <View style={{ flexDirection: "row", gap: 15 }}>
            <Image
              source={require("@/assets/appImages/girl.png")}
              style={{
                width: 80,
                height: 80,
                resizeMode: "contain",
                borderRadius: 50,
              }}
            />
            <View style={{ justifyContent: "space-between" }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 20, color: "white" }}
              >
                Sophia Mitchell
              </Text>
              <Text style={{ color: "#ccc", marginBottom: 4 }}>@Sophia_m</Text>
              <View style={{ flexDirection: "row", gap: 5 }}>
                <Text style={styles.tag}>INTJ</Text>
                <Text style={styles.tag}>Empath</Text>
              </View>
            </View>
          </View>

          <Text style={{ color: "white", fontStyle: "italic" }}>
            “Your Ai-analyzed profiles essence, visible only to you”
          </Text>

          <View
            style={{
              flexDirection: "row",
              gap: 5,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                backgroundColor: "#1a0033",
                alignItems: "center",
                borderRadius: 15,
                padding: 10,
              }}
            >
              <Image
                source={require("@/assets/appImages/heart.png")}
                style={{ width: 22, height: 22, marginBottom: 10 }}
              />
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Relationship
              </Text>
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Type
              </Text>
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Secure
              </Text>
            </View>

            <View
              style={{
                backgroundColor: "#1a0033",
                alignItems: "center",
                borderRadius: 15,
                padding: 10,
              }}
            >
              <Image
                source={require("@/assets/appImages/weight.png")}
                style={{ width: 20, height: 20, marginBottom: 10 }}
              />
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Love
              </Text>
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Language
              </Text>
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Quality Time
              </Text>
            </View>

            <View
              style={{
                backgroundColor: "#1a0033",
                alignItems: "center",
                borderRadius: 15,
                padding: 10,
              }}
            >
              <Image
                source={require("@/assets/appImages/puzzle.png")}
                style={{ width: 20, height: 20, marginBottom: 10 }}
              />
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Compatibilities
              </Text>
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                4 Types
              </Text>
            </View>
          </View>
        </LinearGradient>

        <View
          style={{
            backgroundColor: "#4c2f6a",
            borderRadius: 15,
            padding: 15,
            borderWidth: 1,
            borderColor: "indigo",
            gap:15
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <Image
                source={require("@/assets/appImages/mind.png")}
                style={{ width: 26, height: 26 }}
              />
              <Text
                style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
              >
                Core Personality
              </Text>
            </View>
            <Text style={{ color: "#ccc" }}>96% Accuracy</Text>
          </View>

          <View
            style={{
              backgroundColor: "#58367c",
              borderRadius: 15,
              padding: 15,
              borderWidth: 1,
              borderColor: "indigo",
            }}
          >
            <Text style={{color:"#ccc", fontWeight:"bold", fontSize:16}}>Personality Type</Text>
            <Text style={{color:"#ccc", marginTop:10, textAlign:"justify"}}>The INTJ personality type, also known as the "Architect," is characterized by being introverted, intuitive, thinking, and judging. They are known for their strategic, logical, and analytical minds, often referred to as "the mastermind" or "the strategistSometimes referred to as the "Architect" or the "Strategist," people with an INTJ personality are highly analytical, creative, and logical."</Text>
          </View>

          <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            <View
            style={{
              backgroundColor: "#58367c",
              borderRadius: 15,
              padding: 15,
              borderWidth: 1,
              borderColor: "indigo",
              width:160,
              gap:5
            }}
          >
            <Text style={{color:"#ccc", fontWeight:"bold", fontSize:16}}>Strength</Text>
            <Text style={{color:"#ccc"}}>- Strategic Thinking and Problem Solving</Text>
            <Text style={{color:"#ccc"}}>- Independent and Self-Motivated</Text>
            <Text style={{color:"#ccc"}}>- Creative and Imaginative</Text>
          </View>
            <View
            style={{
              backgroundColor: "#58367c",
              borderRadius: 15,
              padding: 15,
              borderWidth: 1,
              borderColor: "indigo",
              width:160,
              gap:5
            }}
          >
            <Text style={{color:"#ccc", fontWeight:"bold", fontSize:16}}>Growth Areas</Text>
            <Text style={{color:"#ccc"}}>- Self-Criticism and Perfectionism</Text>
            <Text style={{color:"#ccc"}}>- Emotional Awareness and Management</Text>
            <Text style={{color:"#ccc"}}>- Flexibility and Adaptability</Text>
          </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tag: {
    backgroundColor: "#4E4859",
    paddingHorizontal: 15,
    paddingVertical: 3,
    color: "white",
    borderRadius: 10,
    fontSize: 12,
  },
});
