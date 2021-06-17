import React, { useState } from 'react';
import { Alert, View, StyleSheet } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  function handleAddTask(newTaskTitle: string) {
    if (newTaskTitle !== '' && newTaskTitle.replace(/ /g, '').length > 0) {
      const newTask: Task = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false,
      }
      setTasks([...tasks, newTask])

    }
  }

  function handleMarkTaskAsDone(id: number) {
    setTasks(
      tasks.map(task => task.id === id ? { ...task, done: true } : task)
    );
  }

  function handleRemoveTask(id: number) {
    setTasks(
      tasks.filter(task => task.id !== id)
    );
  }

  return (
    <>
      <Header setDarkMode={setDarkMode} darkMode={darkMode} />

      <View style={darkMode && styles.container}>
      <TodoInput addTask={handleAddTask} darkMode={darkMode}/>

        <MyTasksList
          tasks={tasks}
          onPress={handleMarkTaskAsDone}
          onLongPress={handleRemoveTask}
          darkMode={darkMode}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191D3A'
  }
})