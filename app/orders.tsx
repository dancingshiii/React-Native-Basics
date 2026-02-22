import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  Modal,
  Alert,
  StyleSheet,
  Platform,
} from 'react-native';

export default function Orders() {
  const [inputText, setInputText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const data = [
    { id: '1', name: '🍕 Pizza', price: '$12' },
    { id: '2', name: '🍔 Burger', price: '$8' },
    { id: '3', name: '🥗 Salad', price: '$7' },
  ];

  const showAlert = () => {
    Alert.alert('Alert', 'This is an alert!');
  };

  const handleModalClose = () => {
    setModalVisible(false);
    showAlert(); // Alert when modal is closed
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.inner}>
        {/* FlatList with 3 items */}
        <Text style={styles.subtitle}>📋 Menu Items</Text>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.itemCard}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
          )}
          style={styles.list}
        />

        {/* Form Elements */}
        <Text style={styles.subtitle}>✍️ Enter Something</Text>
        <TextInput
          style={styles.input}
          placeholder="Type here..."
          value={inputText}
          onChangeText={setInputText}
          placeholderTextColor="#aaa"
        />

        {/* Two ways to trigger alert */}
        <View style={styles.buttonRow}>
          <Button title="Show Alert" onPress={showAlert} color="#6200ee" />
        </View>

        <TouchableOpacity style={styles.touchable} onPress={showAlert}>
          <Text style={styles.touchableText}>Press me (TouchableOpacity)</Text>
        </TouchableOpacity>

        {/* Modal */}
        <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.modalButtonText}>Show Modal</Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={handleModalClose}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>📦 This is a modal</Text>
              <TouchableOpacity style={styles.closeButton} onPress={handleModalClose}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  inner: {
    flex: 1,
    padding: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#6200ee',
    marginTop: 10,
    marginBottom: 10,
  },
  list: {
    maxHeight: 150, // to keep it compact
  },
  itemCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  itemName: { fontSize: 16, fontWeight: '500' },
  itemPrice: { fontSize: 16, color: '#6200ee', fontWeight: '600' },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  buttonRow: {
    marginBottom: 10,
  },
  touchable: {
    backgroundColor: '#6200ee',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
    elevation: 2,
  },
  touchableText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  modalButton: {
    backgroundColor: '#6200ee',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
    width: '80%',
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    color: '#333',
  },
  closeButton: {
    backgroundColor: '#6200ee',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});