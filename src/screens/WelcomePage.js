import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Influencers from "../../assets/images/Influencers";
import { preventAutoHide } from "expo/build/launch/SplashScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.Area}>
      <FlatList
        style={styles.list}
        data={Influencers}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.info}>
              <Image
                style={styles.image}
                source={item.image}
                resizeMode="cover"
              />
              <Image style={styles.leftTopIcon} source={item.icon} />
              <FontAwesome
                style={styles.iconAwesome}
                name="heart-o"
                size={35}
                color="white"
              />
              <LinearGradient
                colors={[
                  "transparent",
                  "rgba(0, 0, 0, 0.7)",
                  "rgba(0, 0, 0, 1)"
                ]}
                style={styles.gradient}
              >
                <TouchableOpacity
                  style={[
                    styles.button,
                    {
                      backgroundColor:
                        item.gender === "male" ? "#B99B5F" : "#517AF7"
                    }
                  ]}
                >
                  <Text style={{ color: "white" }}>BRIEF</Text>
                </TouchableOpacity>
                <Text style={styles.textName}>{item.name}</Text>
                <Text style={styles.textAbout}>{item.info}</Text>
                <Text style={styles.textEarnings}>
                  {"Earnings:  " + item.earnings}
                </Text>
              </LinearGradient>

              <Ionicons
                style={styles.iconIony}
                name="ios-gift"
                size={25}
                color="white"
              />
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Area: {
    // marginTop: 100,
    // marginBottom: 50
  },
  list: {
    // List

    backgroundColor: "white",
    height: "100%",
    width: "100%",
    paddingHorizontal: 10
  },
  button: {
    backgroundColor: "#b5ae96",
    position: "absolute",
    bottom: 23,
    right: 25,
    padding: 10,
    borderRadius: 5,
    color: "white"
  },
  image: {
    // Image
    width: "100%",
    height: "100%"
  },
  info: {
    // Container of Image
    overflow: "hidden",
    width: "100%",
    height: 470,
    borderRadius: 25,
    marginVertical: 5
  },

  leftTopIcon: {
    position: "absolute",
    top: 30,
    left: 30,
    width: 65,
    height: 65,
    borderRadius: 32,
    borderWidth: 3,
    borderColor: "white"
  },
  iconAwesome: {
    position: "absolute",
    top: 30,
    right: 30
  },
  iconIony: {
    position: "absolute",
    bottom: 25,
    left: 20
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 165,
    flexDirection: "column"
  },

  textName: {
    position: "absolute",
    bottom: 85,
    left: 20,
    color: "white",
    fontSize: 24,
    fontWeight: "700"
  },
  textAbout: {
    position: "absolute",
    bottom: 65,
    left: 20,
    color: "white",
    fontSize: 16,
    fontWeight: "600"
  },
  textEarnings: {
    position: "absolute",
    bottom: 30,
    left: 55,
    color: "white",
    fontWeight: "500"
  }
});
