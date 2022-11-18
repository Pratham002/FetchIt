import "./App.css"
import { Route, Routes } from "react-router-dom"
import { Container } from "@mui/material"
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar"
import Trending from "./Pages/Trending/Trending"
import Movies from "./Pages/Movies/Movies"
import Series from "./Pages/Series/Series"
import Search from "./Pages/Search/Search"

function App() {
  return (
    <>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            <Route path="/*" element={<Trending />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Container>
      </div>
      <Navbar />
    </>
  )
}

export default App
