import React, { useState } from 'react';
import { Image, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import checkIcon from '../assets/icons/Check.png';

interface TodoInputProps {
  addTask: (task: string) => void;
  darkMode: boolean;
}

export function TodoInput({ addTask, darkMode }: TodoInputProps) {
  const [task, setTask] = useState('');

  function handleAddNewTask() {
    addTask(task);
    setTask('');
  }

  return (
    <View style={darkMode ? [styles.inputContainer, styles.inputContainerDark, Platform.OS === 'ios' ? styles.inputIOSShadow : styles.inputAndroidShadow] : 
                            [styles.inputContainer, Platform.OS === 'ios' ? styles.inputIOSShadow : styles.inputAndroidShadow]
    }>
      <TextInput 
        style={darkMode ? [styles.input, styles.inputDark]: styles.input} 
        placeholder="Adicionar novo todo..."
        returnKeyType="send"
        onChangeText={setTask}
        value={task}
        onSubmitEditing={handleAddNewTask}
        placeholderTextColor={darkMode ? 'rgba(225, 225, 230, 1)': 'grey'}
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={darkMode ? [styles.addButton, styles.addButtonDark] : styles.addButton}
        onPress={handleAddNewTask}
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#F5F4F8',
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainerDark: {
    backgroundColor: '#413A6F',

  },
  input: {
    flex: 1,
    backgroundColor: '#F5F4F8',
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  inputDark: {
    backgroundColor: '#413A6F',
  },
  inputIOSShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  inputAndroidShadow: {
    elevation: 5
  },
  addButton: {
    backgroundColor: '#3FAD27',
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  addButtonDark: {
    backgroundColor: '#9347CA'
  }
});