// MovieCard.tsx
import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

interface MovieCardProps {
  title: string;
  image: any; // Require the correct type for your images
  rating: number;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, image, rating }) => {
  console.log(image, "image is");

  return (
    <View style={styles.card}>
      <ImageBackground
        source={require("../assets/movie2.jpg")}
        style={styles.image}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.rating}>{rating.toFixed(1)}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "48%", // Adjust as needed
    marginBottom: 10,
  },
  image: {
    // width: "100%",
    aspectRatio: 0.75, // Adjust aspect ratio as needed
    justifyContent: "flex-end", // Aligns the overlay at the bottom
  },
  overlay: {
  margin:5
  },
  title: {
    color: "white",
    fontSize:14,
    fontWeight: "bold",
   marginBottom:2
  },
  rating: {
    color: "white",
    fontSize: 12,
  },
});

export default MovieCard;
