export const fetchPlanets = async () => (
  // await fetch('https://swapi.dev/api/planetss')
  await fetch('https://swapi.py4e.com/api/planets')
).json()

export const fetchPeople = async () => (
  await fetch('https://swapi.py4e.com/api/people')
).json()