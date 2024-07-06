// Pill.tsx
import React from "react";
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";

interface PillProps {
  label: string;
  isSelected: boolean;
  onPress: () => void;
  style?: ViewStyle;
}

const Pill: React.FC<PillProps> = ({ label, isSelected, onPress, style }) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[styles.pill, isSelected ? styles.selectedPill : null, style]}
      onPress={onPress}
    >
      <Text
        style={[styles.pillText, isSelected ? styles.selectedPillText : null]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  pill: {
    backgroundColor: "#484848",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
  },
  selectedPill: {
    backgroundColor: "#F0283C",
  },
  pillText: {
    color: "#F5F5F5",
  },
  selectedPillText: {
    color: "#fff",
  },
});

export default Pill;
