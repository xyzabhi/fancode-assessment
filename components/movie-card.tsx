// MovieCard.tsx
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface MovieCardProps {
  title: string;
  image: any; // Require the correct type for your images
  rating: number;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, image, rating }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.rating}>{rating.toFixed(1)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  rating: {
    fontSize: 16,
    color: '#666',
  },
});

export default MovieCard;
