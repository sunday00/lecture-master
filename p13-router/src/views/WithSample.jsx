import { useLocation, useParams } from "react-router-dom";

export default () => {
  const location = useLocation()
  const params = useParams()

  return (<div className="h-[100vh] flex justify-center items-center flex-col">
    <div className="flex-col mb-8">
      <h4>Location</h4>
      <textarea
        className="text-black p-4"
        value={JSON.stringify(location, null, 2)}
        cols="50"
        rows="8"
        readOnly={true}
      ></textarea>
    </div>
    <div className="flex-col">
      <h4>Params</h4>
      <textarea
        className="text-black p-4"
        value={JSON.stringify(params, null, 2)}
        cols="50"
        rows="8"
        readOnly={true}
      ></textarea>
    </div>
  </div>)
}