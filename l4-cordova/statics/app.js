(function($){
  getPages();
})(jQuery);

function getPages(){
  let app = $.sammy('#app', function(){
    // this.use('template');

    let home = this.get('#/', function(ctx, next){
      let str = location.href.toLowerCase();
      ctx.app.swap('');

      ctx.render('/pages/home.template', {})
        .appendTo(ctx.$element())
        .then(function(c, n){
          $('#test').html('hello testing?');
          console.log('3', 'this is called very lazy, even after main layout html rendered');
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

    this.get('#/about', function(ctx){
      let str = location.href.toLowerCase();
      ctx.app.swap('');
      ctx.render('/pages/about.template', {})
        .appendTo(ctx.$element());
    });
  });

  app.run('#/');
}