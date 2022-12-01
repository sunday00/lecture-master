export const fetchPlanets = async () => (
  // await fetch('https://swapi.dev/api/planetss')
  await fetch('https://swapi.dev/api/planets')
).json()

export const fetchPeople = async () => (
  await fetch('https://swapi.dev/api/people')
).json()