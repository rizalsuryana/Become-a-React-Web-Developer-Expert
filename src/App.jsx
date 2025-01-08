import Navigation from "./components/Navigation"
import HomePage from "./pages/HomePage"
import Footer from "./components/Footer"
import CounterApp from "./components/counterapp/CounterApp"
import { Routes, Route } from "react-router-dom"
import './styles/style.css'


function App() {

  return (
    <>
    <Navigation/>
    <main>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/counterapp" element={<CounterApp/>}/>
      </Routes>
    </main>
    <Footer/>
    </>

  )
}

export default App
