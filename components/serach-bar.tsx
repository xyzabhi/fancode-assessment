// SearchInput.tsx
import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";

interface SearchInputProps {
  query: string;
  setQuery: (text: string) => void;
  onSearch: () => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  query,
  setQuery,
  onSearch,
}) => {
  const [seachQuery, setSearchQuery] = useState<string>("");
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={onSearch}
      />
      <Text>Close</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  searchButton: {
    marginLeft: 10,
    padding: 10,
  },
});

export default SearchInput;
