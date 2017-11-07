// Copyright (c) 2017 andrew morton <drewish@katherinehouse.com>.
var script = document.createElement('script');
script.type = 'text/javascript';
script.appendChild(document.createTextNode('alert = function() {};'));
document.body.appendChild(script);

console.log('Disabled the Google Calendar alerts!');
