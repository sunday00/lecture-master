import propType from 'prop-types'

const Planet = ({planet}) => {
  return (<>
    <div className="card bg-neutral shadow-xl m-4">
      <div className="card-body">
        <h3 className="card-title">{planet.name}</h3>
        <p>Population: {planet.population}</p>
        <p>Terrain: {planet.terrain}</p>
      </div>
    </div>
  </>)
}

Planet.propTypes = {
  population: propType.string,
  terrain: propType.string,
}

export default Planet;
