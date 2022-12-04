export const fetchPlanets = async ({ queryKey }) => {
  const [_key, someValue, page] = queryKey
  console.log(someValue)
  // await fetch('https://swapi.dev/api/planetss')
  return (await fetch(`https://swapi.py4e.com/api/planets?page=${page}`))
    .json()
}

export const fetchPeople = async () => (
  await fetch('https://swapi.py4e.com/api/people')
).json()