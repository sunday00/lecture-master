import React, { useState } from 'react'
import NavList from './components/NavList';
import Header from './components/Header';
import Content from './components/Content';

import Controls from './components/Controls'
import Create from './components/Create'

function App() {

  const [content, setContent] = useState({
    title: 'welcome',
    description: 'Hello react'
  });

  const [list, setList] = useState([
    {id: 1, title: 'HTML', href: '#', description: 'HTML is hyper text markup language'},
    {id: 2, title: 'CSS', href: '#', description: 'CSS is Cascade Style Sheet'},
    {id: 3, title: 'JS', href: '#', description: 'JS is Javascript'},
  ]);

  const [mode, setMode] = useState('welcome')

  // const [mode, setMode] = useState('read'); 

  function onChange (e, v, newMode) {

    setMode(newMode);
    
    if( newMode === 'welcome' || newMode === 'read' ){
      let content = list.find(l => l.id === v);

      setContent({
        title: v === 'welcome' ? 'welcome' : content.title,
        description: v === 'welcome' ? 'Hello react' : content.description
      });
    }
    
  }

  function onCreate(e, title, description) {

    console.log(list.reduce((acc, li) => acc = acc > li.id ? acc : li.id, 0));

    setList([...list, {
      id: list[list.length - 1].id + 1,
      href: '#',
      title, description
    }]);
    setMode('read');
    setContent({
      title, description
    });
  }

  return (
    <>
      <Header mainTitle="WEB" subTitle="word wide web" onChangePage={(e, v) => onChange(e, v, 'welcome')}></Header>
      <NavList list={list} onChangePage={(e, v, newMode) => onChange(e, v, newMode)}></NavList>
      <Controls onChangePage={(e, v, newMode) => onChange(e, v, newMode)}></Controls>
      { (mode==='welcome' || mode ==='read') && <Content content={content}></Content>}
      { mode==='create' && <Create onCreate={(e, title, description) => onCreate(e, title, description)}></Create>}
    </>
  );
}

export default App;
