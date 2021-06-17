import React, { useState } from 'react';
import { Alert } from 'react-native';

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

  function handleAddTask(newTaskTitle: string) {
    if(newTaskTitle !== '') {
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
      tasks.map(task => task.id === id ? {...task, done: true} : task)
    );
  }

  function handleRemoveTask(id: number) {
    setTasks(
      tasks.filter(task => task.id !== id)
    );
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}