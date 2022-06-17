import React, { useState } from 'react'
// CSS
import styles from './App.module.css'
// Components
import Footer from './components/Footer'
import Header from './components/Header'
import Modal from './components/Modal'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
// Interface
import { ITask } from './interfaces/Task'

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([])

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id
      })
    )
  }

  return (
    <div>
      <Modal />
      <Header />
      <main className={styles.main}>
        <div>
          <h2>Conteúdo</h2>
          <TaskForm
            btnText="Criar tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList taskList={taskList} handleDelete={deleteTask} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
