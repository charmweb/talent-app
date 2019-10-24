import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import ResultsDetails from "../components/ResultsDetail";
import { withNavigation } from "react-navigation";

const ResultsList = ({ title, results, navigation }) => {
  if (!results.length) return null; // don't shows anything at all if there are no results
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.textStyle}>Results: {results.length}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Results", { id: item.id })}
            >
              <ResultsDetails result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15
  },
  textStyle: {
    alignSelf: "center"
  },
  viewStyle: {
    borderWidth: 1,
    borderColor: "#F0EEEE",
    marginTop: 10
  }
});

export default withNavigation(ResultsList);
