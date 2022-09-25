import { useRecoilState, useRecoilValue } from 'recoil';
import { charCountState, textState } from '@/store/textCounter.store.jsx';

export default () => {
  const [text, setText] = useRecoilState(textState)

  const charCount = useRecoilValue(charCountState)

  const onChange = (e) => {
    setText(e.target.value);
  }

  return (<section className="hero min-h-screen">
    <div>
      <input type="text" placeholder="Type here"
             className="input input-bordered w-full max-w-xs"
             value={text}
             onChange={onChange}
      />
      <p>Count: {charCount}</p>
    </div>
  </section>)
}