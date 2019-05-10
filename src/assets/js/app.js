import $ from 'jquery';
import whatInput from 'what-input';
import Typed from 'typed.js';
window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


var typed = new Typed('.typed', {
    strings: ["Hello world.", "Check this out.", "Add any text you like here."],
        typeSpeed: 100,
  		startDelay: 0,
  		backSpeed: 60,
  		backDelay: 2000,
  		loop: true,
  		cursorChar: "|",
        contentType: 'html',
        fadeOut: true,
        smartBackspace: true
  });



$(document).foundation();


