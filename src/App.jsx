import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Landing />} />
      </Routes>
      </BrowserRouter>
        
    </>
  )
}

export default App
