const code_rsc_api = async () => {
  const res = await fetch('https://api.sampleapis.com/codingresources/codingResources')
  const data = await res.json()
  for( item of data ){
    const el = `
    <figure class="item item-${item.id} col-3">
      <h5>${item.description}</h5>
    </figure>
    `;

    document.querySelector('section').insertAdjacentHTML('beforeend', el);
  }
}

code_rsc_api()