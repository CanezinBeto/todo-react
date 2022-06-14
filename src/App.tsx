import styles from './App.module.css'
//Components
import Footer from './components/Footer'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
// Interface
import { ITask } from './interfaces/Task'

function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>Conteúdo</h2>
          <TaskForm btnText="Criar tarefa" />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
