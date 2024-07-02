import MovieCard from "@/components/movie-card";
import Pill from "@/components/pills";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";

const App: React.FC = () => {
  const items = ["Action", "Comedy", "Drama", "Fantasy", "Sci-Fi"];
  const [selectedPill, setSelectedPill] = useState<string | null>(items[3]);

  const handlePillPress = (item: string) => {
    setSelectedPill(selectedPill === item ? null : item);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.productLogo}>MOVIEFIX</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.pillsContainer}
        >
          {items.map((item) => (
            <Pill
              key={item}
              label={item}
              isSelected={selectedPill === item}
              onPress={() => handlePillPress(item)}
            />
          ))}
        </ScrollView>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.contentContainer}>
          
          <MovieCard title={"Avengers"} image="../assets/movie2.jpg" rating={0} />
          <MovieCard title={"Avengers"} image="../assets/movie2.jpg" rating={0} />
          <MovieCard title={"Avengers"} image="../assets/movie3.jpg" rating={0} />
          <MovieCard title={"Avengers"} image="../assets/movie1.jpg" rating={0} />
          <MovieCard title={"Avengers"} image="../assets/movie1.jpg" rating={0} />
          <MovieCard title={"Avengers"} image="../assets/movie1.jpg" rating={0} />
          <MovieCard title={"Avengers"} image="../assets/movie1.jpg" rating={0} />
          <MovieCard title={"Avengers"} image="../assets/movie1.jpg" rating={0} />
          <MovieCard title={"Avengers"} image="../assets/movie1.jpg" rating={0} />
          <MovieCard title={"Avengers"} image="../assets/movie1.jpg" rating={0} />

          {/* Add more images as needed */}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
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
