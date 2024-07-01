import Pill from '@/components/pills';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';


const App: React.FC = () => {
  const items = ['Action', 'Comedy', 'Drama', 'Fantasy', 'Sci-Fi'];
  const [selectedPill, setSelectedPill] = useState<string | null>(items[3]);



  const handlePillPress = (item: string) => {
    setSelectedPill(selectedPill === item ? null : item);
    console.log('Selected Item:', item);
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
      <View style={styles.contentContainer}>
        <Text style={styles.title}>MovieFlix</Text>
        {/* Add more content below the MovieFlix text */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    backgroundColor:"#242424"
  },
  pillsContainer: {
    // paddingHorizontal: 20,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  productLogo:{
    fontSize:28,
    fontWeight:"bold",
    color:"#F0283C",
    margin:10
  }
});

export default App;
