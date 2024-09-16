import './index.css'

const PlanetItem = props => {
  const {planetsList} = props
  const {name: planetName, imageUrl, description} = planetsList
  return (
    <div className="planetItem-container">
      <img src={imageUrl} alt={`planet ${planetName}`} className="image-item" />
      <h1 className="name">{planetName}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
