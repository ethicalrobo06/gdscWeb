import './App.css'
import Profile from './screens/Profile'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
function App() {
  return (
    <div className="flex justify-center items-center h-screen ">
      {/* route == /login <Login/> */}
      {/* route == /register <Login/> */}
      {/* <Login /> */}
      {/* <Register /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
