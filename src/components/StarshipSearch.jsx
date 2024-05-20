import { useState } from "react"

const StarshipSearch = ({ search }) => {
  const [formData, setFormData] = useState("corvette")

  const handleChange = () => {}

  const handleSubmit = (e) => {
    e.preventDefault()
    search(formData)
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
