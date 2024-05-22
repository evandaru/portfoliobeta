import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './pages'
import Comingsoon from "./pages/comingsoon";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/blog" element={<Comingsoon />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
