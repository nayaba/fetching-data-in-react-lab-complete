import StarshipSearch from './components/StarshipSearch'
import StarshipList from "./components/StarshipList"
import { useState } from 'react'
import { useEffect } from 'react'
import * as starshipService from './services/starshipService'

const App = () => {

  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await starshipService.index()
      setStarships(data.results)
    }
    fetchData()
  }, [])

  return (
    <>
      <h1>Hello world!</h1>
      <StarshipSearch />
      <StarshipList starships={starships} />
    </>
  )
}

export default App
