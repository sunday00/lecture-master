import propType from 'prop-types'

const Person = ({person}) => {
  return (<>
    <div className="card bg-neutral shadow-xl m-4">
      <div className="card-body">
        <h3 className="card-title">{person.name}</h3>
        <p>Gender: {person.gender}</p>
        <p>Birth year: {person.birth_year}</p>
      </div>
    </div>
  </>)
}

Person.propTypes = {
  gender: propType.string,
  birth_year: propType.string,
}

export default Person;
