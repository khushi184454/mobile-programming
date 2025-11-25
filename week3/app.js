import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  Modal,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";

export default function HomeScreen() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [expenseName, setExpenseName] = useState("");

  const handleAdd = () => {
    if (!expenseName.trim()) {
      Alert.alert("Empty Field", "Please enter an expense name!");
      return;
    }
    Alert.alert("Added!", `${expenseName} added successfully!`);
    setExpenseName("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>

        {/* NAVBAR */}
        <View style={styles.navbar}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/1048/1048947.png",
            }}
            style={styles.logo}
          />
          <TouchableOpacity onPress={() => setMenuVisible(true)}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/56/56763.png",
              }}
              style={styles.hamburger}
            />
          </TouchableOpacity>
        </View>

        {/* HAMBURGER MODAL */}
        <Modal visible={menuVisible} transparent animationType="slide">
          <TouchableOpacity
            style={styles.modalOverlay}
            onPress={() => setMenuVisible(false)}
          >
            <View style={styles.modalBox}>
              <Text style={styles.modalText}>Home</Text>
              <Text style={styles.modalText}>My Expenses</Text>
              <Text style={styles.modalText}>Settings</Text>
              <Text style={styles.modalText}>Logout</Text>
            </View>
          </TouchableOpacity>
        </Modal>

        {/* MAIN CONTENT */}
        <ScrollView>
          <Text style={styles.title}>Splitify – Expense Splitter</Text>
          <Text style={styles.subtitle}>Plan & split expenses easily</Text>

          {/* TEXT INPUT */}
          <View style={styles.inputBox}>
            <TextInput
              style={styles.input}
              placeholder="Enter expense name"
              value={expenseName}
              onChangeText={setExpenseName}
            />
            <TouchableOpacity style={styles.addBtn} onPress={handleAdd}>
              <Text style={styles.addText}>Add</Text>
            </TouchableOpacity>
          </View>

          {/* CATEGORY CARDS */}
          <View style={styles.cardContainer}>
            <TouchableOpacity style={styles.card}>
              <Text style={styles.cardTitle}>🏋️ Workout Gear</Text>
              <Text style={styles.cardSub}>Track expenses for fitness items</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
              <Text style={styles.cardTitle}>🥗 Meal Prep</Text>
              <Text style={styles.cardSub}>Diet & nutrition spending</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
              <Text style={styles.cardTitle}>💊 Supplements</Text>
              <Text style={styles.cardSub}>Protein, vitamins & more</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
              <Text style={styles.cardTitle}>🧘 Classes</Text>
              <Text style={styles.cardSub}>Yoga, Zumba & gym sessions</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F7F7F7" },

  /* NAVBAR */
  navbar: {
    height: 60,
    paddingHorizontal: 20,
    backgroundColor: "#4CAF50",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 5,
  },
  logo: { width: 35, height: 35 },
  hamburger: { width: 30, height: 30 },

  /* MODAL */
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "flex-start",
  },
  modalBox: {
    width: 220,
    height: "100%",
    backgroundColor: "#FFF",
    padding: 20,
    elevation: 10,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: "600",
    color: "#444",
  },

  /* TEXT */
  title: {
    fontSize: 26,
    fontWeight: "700",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  subtitle: {
    fontSize: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
    color: "#777",
  },

  /* INPUT */
  inputBox: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 12,
    borderRadius: 10,
    elevation: 3,
  },
  addBtn: {
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: "#4CAF50",
    borderRadius: 10,
    marginLeft: 10,
  },
  addText: { color: "#FFF", fontWeight: "700" },

  /* CARDS */
  cardContainer: { paddingHorizontal: 20 },
  card: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 15,
    marginVertical: 10,
    elevation: 5,
  },
  cardTitle: { fontSize: 18, fontWeight: "700", marginBottom: 5 },
  cardSub: { fontSize: 14, color: "#777" },
});
