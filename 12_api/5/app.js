let url = 'https://icanhazdadjoke.com/'

document.querySelector('button').addEventListener('click', (e) => {
  axios.get(url, {
    headers: {
      Accept: 'application/json',
    }
  })
  .then(({data}) => {
    const el = `
    <li class="item item-${data.id}">
      ${data.joke}
    </li>
    `;
    document.querySelector('section ul').insertAdjacentHTML('beforeend', el);
    
  })
})