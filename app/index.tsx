import MovieCard from "@/components/movie-card";
import Pill from "@/components/pills";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { fetchData } from "./apis/apis";
import { apiUrl, headers } from "@/constants/constant";

const App: React.FC = () => {


  const [genres,setGenres]=useState<genreType[]>([])
  const [selectedPill, setSelectedPill] = useState<string | null>();

  const handlePillPress = (item: string) => {
    setSelectedPill(selectedPill === item ? null : item);
  };

  useEffect(() => {
    fetchData(apiUrl, headers)
      .then((data) => {
       setGenres(data.genres);
        console.log("API response:", JSON.stringify(data.genres));
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  });

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.productLogo}>MOVIEFIX</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.pillsContainer}
        >
          {genres.map((item:genreType) => (
            <Pill
              key={item.id}
              label={item.name}
              isSelected={selectedPill === item.name}
              onPress={() => handlePillPress(item.name)}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    marginTop: 10,
  },
  headerContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 10,
    backgroundColor: "#242424",
  },
  pillsContainer: {
    // paddingHorizontal: 20,
  },
  headerSection: {},

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    color: "#fff",
  },
  productLogo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#F0283C",
    margin: 10,
    marginBottom: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    // padding: 10,
  },
  contentContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between", // Adjusts the spacing between the items
    // padding: , // Add some padding if needed
  },
  image: {
    width: "48%", // Adjusts the width to fit two items in a row with some spacing
    aspectRatio: 0.75, // Keeps the image aspect ratio square
    marginBottom: 5, // Adds some spacing between rows
  },
});

export default App;
