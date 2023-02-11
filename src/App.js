import Container from "./components/Container"
import { useState } from "react"
import Header from "./components/Header"
import Welcome from "./components/Welcome"
import CharacterContainer from "./components/CharacterContainer"

function App() {
  const [characters,setCharacters] = useState(null)
  const reqApi = async () => {
    const api = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
    const frase = await api.json()
    setCharacters(frase)
  }
  
  return (
    <Container>
    <Header />
    {!characters ? (
      <Welcome reqApi={reqApi} />
    ) : (
      <CharacterContainer characters={characters} reqApi={reqApi} />
    )}
  </Container>

  )
}


export default App
