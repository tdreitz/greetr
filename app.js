// gets a new object (the architecture allow us to not have to use the 'new'
// keyword here)
var g = G$('Tyler', 'Reitz');

// use our chainable methods
g.greet().setLang('es').greet();

// let's use our object on the click of the login button
$('#login').click(function() {

  // create a new 'Greetr' object (let's pretend we know the name from the login)
  var loginGrtr = G$('Tyler', 'Reitz');

  // fire off an HTML greeting, passing '#greeting' as the selector and
  // the chosen language, and log the welcome as well
  loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();

}) 