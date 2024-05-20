import StarshipCard from "./StarshipCard"

const StarshipList = ({ starships }) => {
  return (
    <>
      <h2>All Starships</h2>
      {starships.map((ship) => (
        <StarshipCard ship={ship} />
      ))}
    </>
  )
}

export default StarshipList
