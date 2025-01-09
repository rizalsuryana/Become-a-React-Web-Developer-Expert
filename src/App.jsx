import Navigation from "./components/Navigation"
import HomePage from "./pages/HomePage"
import Footer from "./components/Footer"
import CounterApp from "./components/counterapp/CounterApp"
import StopwatchApp from "./components/stopwatch/StopwatchApp"
import Store from "./components/store-state-tree//store"
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
        <Route path="/stopwatchapp" element={<StopwatchApp/>}/>
        <Route path="/store" element={<Store/>}/>
      </Routes>
    </main>
    <Footer/>
    </>

  )
}

export default App
