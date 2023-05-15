export const RoomIn = () => {
  const roomName= Object.fromEntries(
    new URLSearchParams(location.search)
  ).room

  return (<>
    <h1>Room - {roomName}</h1>
  </>)
}
