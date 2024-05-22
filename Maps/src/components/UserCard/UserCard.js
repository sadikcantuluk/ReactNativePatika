import { Modal, Text, View } from "react-native";
import React from "react";
import styles from "./UserCard.style";

export default function UserCard({ isVisible }) {
  return (
    <Modal style={styles.modalContainer} visible={isVisible}>
      <View style={styles.contentContainer}>
        <Text></Text>
      </View>
    </Modal>
  );
}
