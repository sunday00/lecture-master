(function($){
  getPages();
})(jQuery);

function getPages(){
  let app = $.sammy('#app', function(){
    this.use('template');

    this.get('#/', function(ctx){
      let str = location.href.toLowerCase();
      ctx.app.swap('');
      ctx.render('/pages/home.template', {})
        .appendTo(ctx.$element());
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