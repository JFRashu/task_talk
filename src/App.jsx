
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Routes/Layout'
import { Home } from './Routes/Home'
import { Login } from './Routes/Login'
import { Register } from './Routes/Register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* Remove the path="/" since Layout should wrap all routes */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
