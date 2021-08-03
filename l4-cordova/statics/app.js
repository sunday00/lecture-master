(function($){
  // getPages();
  getAllPages();
})(jQuery);

function getPages(){
  let app = $.sammy('#app', function(){
    // this.use('template');

    let home = this.get('#/', function(ctx, next){
      let str = location.href.toLowerCase();
      ctx.app.swap('');

      ctx.render('/templates/pages/home.html', {})
        .appendTo(ctx.$element())
        .then(function(c, n){
          console.log('3', 'this is called very lazy, even after main layout html rendered');

          $.get('http://dev-drw-l3-oop.web/api/v1/pages/read/home')
            .then(res => {
              $('header nav .navbar-nav .nav-item a').removeClass('active');
              $('header nav .navbar-nav .nav-item.home a').addClass('active');

              $('article#content').html(res.data.content);
            });
        });

        ctx.trigger('launch', {action: 1});

        next();
    }, function(ctx, next){
      console.log('2')

      next();
    });

    this.bind('launch', function(e, d){
      console.log(d.action);
    });

    this.get('#/:slug', function(ctx){
      let str = location.href.toLowerCase();
      ctx.app.swap('');
      ctx.render(`/templates/pages/${ctx.params.slug}.html`, {})
        .appendTo(ctx.$element())
        .then(function(){

          $.get(`http://dev-drw-l3-oop.web/api/v1/pages/read/${ctx.params.slug}`)
            .then(res => {
              // $('header nav .navbar-nav .nav-item a').removeClass('active');
              // $(`header nav .navbar-nav .nav-item.${ctx.params.slug} a`).addClass('active');

              $('article#content').html(res.data.content);
            });

        });
    });

    this.before('.*', function(){
      let hash = location.hash; // url http://abc.com#/aaa -> hash: #/aaa
      
      $('header nav .navbar-nav .nav-item a').removeClass('active');
      $(`header nav .navbar-nav .nav-item a[href="${hash}"]`).addClass('active');
    });
  });

  app.run('#/');
}

function getAllPages(){
  $.get('http://dev-drw-l3-oop.web/api/v1/pages')
    .then(res => {
      res.data.forEach(d => {
        let slug = d.slug === null ? '' : d.slug;
        let active = location.hash === '#/'+slug ? 'active' : '';
        let ariaCurrent = active === 'active' ? 'page' : 'false';
  
        $('header nav .navbar-nav').append(`
          <li class="nav-item ${d.title}">
            <a class="nav-link ${active}" aria-current="${ariaCurrent}" href="#/${slug}">
              ${d.title.replace(/./, (c) => c.toUpperCase())}
            </a>
          </li>
        `);
      });

      getPages();
    }).catch((xhr, textStatus, err) => {
      // let data = JSON.parse(err.responseText);
      console.log(xhr, textStatus, err)
    });
}