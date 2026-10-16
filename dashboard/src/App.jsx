
import './App.css'
import Header from './Components/Header'
import StudentCard from './Components/StudentCard'

function App() {


  return (
    <>
      <Header/>
      <StudentCard name="John" course="MERN"/>
      <StudentCard name="Jane" course="Python"/>
      <StudentCard name="Mike" course="Java"/>
    </>
  )
}

export default App
