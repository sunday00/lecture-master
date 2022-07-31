import {ColorConsumer} from "@/contexts/color.jsx";

export default () => {
  return (
    <div className="">
      <input type="hidden" className="bg-red-400"/>
      <input type="hidden" className="bg-orange-400"/>
      <input type="hidden" className="bg-yellow-400"/>
      <input type="hidden" className="bg-blue-400"/>
      <input type="hidden" className="bg-green-400"/>
      <input type="hidden" className="bg-black-400"/>
      <input type="hidden" className="bg-gray-400"/>
      <input type="hidden" className="bg-emerald-400"/>
      <input type="hidden" className="bg-indigo-400"/>
      <input type="hidden" className="bg-pink-400"/>
      <input type="hidden" className="bg-violet-400"/>
      <input type="hidden" className="bg-fuchsia-400"/>
      <input type="hidden" className="bg-rose-400"/>
      <ColorConsumer>
        {value => (
          <div className="flex gap-2">
            <div className={`w-20 h-20 bg-${value.state.color}-400 border `}></div>
            <div className={`w-20 h-20 bg-${value.state.subcolor}-400 border `}></div>
          </div>
        )}
      </ColorConsumer>
    </div>
  )
}