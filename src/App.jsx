import { BrowserRouter, Route, Routes } from "react-router-dom"
import TodoPages from "./pages/TodoPages"
import TodoEdit from "./pages/TodoEdit"



function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<TodoPages/>} />
      <Route path="/todos/:id" element={<TodoEdit/>} />
    </Routes>
    
    </BrowserRouter>
      
  )
}

export default App
