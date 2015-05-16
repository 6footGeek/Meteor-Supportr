Router.configure({
    // the default layout
    layoutTemplate: 'appLayout'
});

Router.route('/', function() {
    this.layout('appLayout');
    this.render('home');
    this.render('splash');
    this.render('PostFooter', {to: 'footer'});
});

Router.route('/about', function() {
    this.render('about');
        this.render('PostFooter', {to: 'footer'});
});

Router.route('/contact', function() {
    this.render('contact');
    this.render('PostFooter', {to: 'footer'});
});


Router.route('/connect', function() {
    this.render('messages');
    this.render('PostFooter', {to: 'footer'});
});