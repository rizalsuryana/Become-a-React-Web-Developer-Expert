import Navigation from "./components/Navigation"
import HomePage from "./pages/HomePage"
import Footer from "./components/Footer"
import CounterApp from "./exercise-list/1-counterapp/CounterApp"
import StopwatchApp from "./exercise-list/2-stopwatch/StopwatchApp"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/Contact"
import ReduxApp from "./exercise-list/3-redux-exercise/ReduxApp"
import { Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"
import {store} from './exercise-list/3-redux-exercise/states/'
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
        <Route path="/redux" element={ 
          <Provider store={store}>
            <ReduxApp/>  
          </Provider>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
    </main>
    <Footer/>
    </>

  )
}

export default App
