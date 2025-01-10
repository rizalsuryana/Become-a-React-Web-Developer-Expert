import Navigation from "./components/Navigation"
import HomePage from "./pages/HomePage"
import Footer from "./components/Footer"
import CounterApp from "./components/counterapp/CounterApp"
import StopwatchApp from "./components/stopwatch/StopwatchApp"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/Contact"
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
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
    </main>
    <Footer/>
    </>

  )
}

export default App
