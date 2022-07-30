const categories = [
  {
    name: 'all',
    text: '전체보기'
  },
  {
    name: 'business',
    text: '비즈니스'
  },
  {
    name: 'entertainment',
    text: '엔터테인먼트'
  },
  {
    name: 'health',
    text: '건강'
  },
  {
    name: 'science',
    text: '과학'
  },
  {
    name: 'sports',
    text: '스포츠'
  },
  {
    name: 'technology',
    text: '기술'
  }
];

export default ({onSelect, category}) => {
  return (<div className="navbar bg-base-100">
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-xl">Korean News</a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal p-0">
        {
          categories.map(c => (
            <li key={c.name}>
              <a href="#"
                 className={c.name === category ? 'bg-accent' : ''}
                 onClick={() => onSelect(c.name)}>{c.text}</a>
            </li>
          ))
        }
      </ul>
    </div>
  </div>)
}