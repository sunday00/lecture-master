import {ColorConsumer} from '@/contexts/color.jsx'

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

export default () => {
  return (<div className="flex-cols text-center">
    <h2 className="text-2xl font-bold mb-4">Select Color</h2>
    <ColorConsumer>
      {({actions}) => (
        <div className="flex">
          {colors.map(c => (<div key={c}
           className={`w-20 h-20 cursor-pointer bg-${c}-400`}
            onClick={() => actions.setColor(c)}
            onContextMenu={e => {e.preventDefault(); actions.setSubcolor(c)}}
          ></div>))}
        </div>
      )}
    </ColorConsumer>
    <hr className="divider"/>
  </div>)
}