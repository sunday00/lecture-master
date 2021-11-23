let url = 'https://api.sampleapis.com/codingresources/codingResources'
axios.get(url)
  .then(({data}) => {
    for( item of data ){
      const el = `
      <figure class="item item-${item.id} col-3">
        <h5>${item.description}</h5>
      </figure>
      `;
  
      document.querySelector('section').insertAdjacentHTML('beforeend', el);
    }
  })