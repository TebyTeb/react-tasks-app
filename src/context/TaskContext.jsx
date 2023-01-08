import { createContext, useState } from 'react'
import data from '../assets/tasks.json'

export const TaskContext = createContext()

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState(data)

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        id: Math.floor(Math.random() * 16) * Date.now(),
        title: task.title,
        description: task.description,
      },
    ])
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  )
}
