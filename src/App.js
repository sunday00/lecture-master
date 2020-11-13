import React, { useState } from 'react'
import NavList from './components/NavList';
import Header from './components/Header';
import Content from './components/Content';

import Controls from './components/Controls'
import Create from './components/Create'
import Update from './components/Update';

function App() {

  const [content, setContent] = useState({
    id:0, title: "welcome", description: 'Hello react' 
  });

  const [list, setList] = useState([
    {id: 1, title: 'HTML', href: '#', description: 'HTML is hyper text markup language'},
    {id: 2, title: 'CSS', href: '#', description: 'CSS is Cascade Style Sheet'},
    {id: 3, title: 'JS', href: '#', description: 'JS is Javascript'},
  ]);

  const [mode, setMode] = useState('welcome');

  function onChange (val, newMode) {

    setMode(newMode);
    
    if( newMode === 'welcome' || newMode === 'read' ){

      let current = list.find(l => l.id === val);

      setContent({
        id: val === "welcome" ? 0 : current.id,
        title: val === "welcome" ? 'welcome' : current.title,
        description: val === "welcome" ? 'Hello react' : current.description
      });
    }
    
  }

  function onCreate(e, title, description) {

    let id = list.reduce((acc, li) => acc = acc > li.id ? acc : li.id, 0);

    setMode('read');
    setContent({
      id: id + 1, title, description
    });
    setList([...list, {
      id: id + 1,
      href: '#',
      title, description
    }]);
  }

  function onUpdate(e, id, title, description) {
    setMode('read');
    setContent({
      title, description
    });
    
    setList(list.map( l => {
      if(l.id === id){
        return Object.assign(l, {title, description});
      }
      return l
    }));

  }

  function onDelete(){

    if ( !window.confirm('sure?') ) return false;

    setList( list.filter(l => {
      return l.id !== content.id
    }) );

    setMode('welcome');
    onChange('welcome', 'welcome');
  }

  return (
    <>
      <Header mainTitle="WEB" subTitle="word wide web" onChangePage={(val) => onChange(val, 'welcome')}></Header>
      <NavList list={list} onChangePage={onChange}></NavList>
      <Controls onChangePage={onChange} onDelete={onDelete} mode={mode}></Controls>
      { (mode==='welcome' || mode ==='read') && <Content content={content}></Content>}
      { mode==='create' && <Create onCreate={(e, title, description) => onCreate(e, title, description)}></Create>}
      { mode==='update' && <Update content={content} onUpdate={(e, id, title, description) => onUpdate(e, id, title, description)}></Update>}
    </>
  );
}

export default App;
