import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Home, About, Post, SinglePost, Project} from "./components/index.js"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path='/' exact />
        <Route element={<About/>} path='/about' />
        <Route element={<Post/>} path='/post' />
        <Route element={<SinglePost/>} path='/post/:slug' />
        <Route element={<Project/>} path='/project' />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
