import './App.css'
import { BrowserRouter as Router, Routes,Route, BrowserRouter, Link } from 'react-router-dom';
import Header from './Components/Header'
import LoginPage from './Components/LoginPage'
import Navbar from './Components/Navbar'
import HomeScreen from './Components/HomeScreen';
function App() {

  return (
    
    
      <div>
        <Header/>
        <Link to="/">
          </Link>
          <Link to="/Home">

          </Link>
        <Routes>
        <Route path="/" element={<LoginPage/>}/>
          <Route path="/home" element={<HomePage/>} />
          </Routes>
      </div>
      
    
  )
}
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HomeScreen />
    </div>
  );
}

export default App
