import { useRecoilState, useRecoilValue } from 'recoil';
import { charCountState, textState } from '@/store/textCounter.store.jsx';
import { NavLink, Route, Routes } from 'react-router-dom';
import TextCounter from '@v/TextCounter';

const Home = () => {


  return (
    <div className='home-wrap'>
      <h1>home</h1>
    </div>
  );
};

export default Home;