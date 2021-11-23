const req = new XMLHttpRequest()

req.onload = function () {
  const data = JSON.parse(this.response);
  for( item of data ){
    const el = `
    <figure class="item item-${item.id} col-3">
      <h5>${item.description}</h5>
    </figure>
    `;

    document.querySelector('section').insertAdjacentHTML('beforeend', el);
  }
}

req.open('GET', 'https://api.sampleapis.com/codingresources/codingResources')
req.send()