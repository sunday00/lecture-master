import color from "@/contexts/color.jsx";

export default () => {
  return (
    <color.Consumer>
      { value => (
        <div className={`w-20 h-20 bg-${value.color}-400 border `}>
          <input type="hidden" className="bg-red-400" />
          <input type="hidden" className="bg-blue-400" />
          <input type="hidden" className="bg-green-400" />
          <input type="hidden" className="bg-black-400" />
          <input type="hidden" className="bg-gray-400" />
          <input type="hidden" className="bg-emerald-400" />
          <input type="hidden" className="bg-pink-400" />
          <input type="hidden" className="bg-violet-400" />
          <input type="hidden" className="bg-fuchsia-400" />
          <input type="hidden" className="bg-rose-400" />
        </div>
      )}
    </color.Consumer>
  )
}