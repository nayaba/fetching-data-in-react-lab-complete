import { useState } from "react"

const StarshipSearch = ({ search, setSearchResults }) => {
  const [formData, setFormData] = useState("corvette")

  const handleChange = () => {}

  const handleSubmit = async (e) => {
    e.preventDefault()
    const found = await search(formData)
    setSearchResults(found.results)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">SEARCH</button>
      </form>
    </>
  )
}

export default StarshipSearch
