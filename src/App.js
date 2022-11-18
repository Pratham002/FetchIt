import "./App.css"
import { Container } from "@mui/material"
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <Header />
      <div className="app">
        <Container>Movie App</Container>
      </div>
      <Navbar />
    </>
  )
}

export default App
