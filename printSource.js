var system = require('system');
var page   = require('webpage').create();
// system.args[0] is the filename, so system.args[1] is the first real argument
var url    = system.args[1];

// var phantomDriver = new PhantomJSDriver();
//var enabled = phantom.Capabilities.IsJavaScriptEnabled;
//console.log(enabled);

phantom.addCookie({
  'name': "csrftoken",
  'value': "sn4LAgDV0KmzAyCIgSvpyO453YoSvLfimnEvc4M572gn2zIUqPbVJocyRx2QFueQ",
  'domain': "127.0.0.1",
  'path': '/',
  'httponly': "false",
  'secure': "false"
});

phantom.addCookie({
  'name': "sessionid",
  'value': "0euy66p53hpyy8npajc2bb81t92reut6",
  'domain': "127.0.0.1",
  'path': '/',
  'httponly': "true",
  'secure': "false"
});
phantom.setJavascriptEnabled(true);

// render the page, and run the callback function
page.open(url, function () {
 // page.content is the source
 setTimeout(function () {
   // console.log(page.content);
   phantom.exit();
 },1000);


 // need to call phantom.exit() to prevent from hanging

});



// page.onInitialized = function () {
//     page.evaluate(function () {
//         var isFunction = function (obj) {
//             return typeof obj == 'function' || false;
//         };
//         var slice = Array.prototype.slice;
//         Function.prototype.bind = function bind(obj) {
//             var args = slice.call(arguments, 1);
//             var self = this;
//             var F = function () {};
//             var bounded = function() {
//                 return self.apply(
//                     this instanceof F ? this : (obj || {}),
//                     args.concat(slice.call(arguments))
//                 );
//             };
//             F.prototype = this.prototype || {};
//             bounded.prototype = new F();
//             return bounded;
//         };
//     });
// };
//
// page.open('127.0.0.1:8000/', function () {
//     setTimeout(function screenshot() {
// //        page.render('WORKS.png', {
// //            format: 'png',
// //            quality: '10',
// //        });
//         console.log(page.content);
//         phantom.exit();
//     }, 10 * 1000);
// });


// page.open(url, function(status) {
//
//   if (status === 'success') {
//
//     // Run a function in the webpage's context and catch what it returns.
//     let html = page.evaluate(function() {
//       // Optionally, do some more page manipulation here.
//       // ...
//
//       // Return the HTML from the loaded and JS-manipulated page.
//       // Note that a console.log() here in this context won't be visible (by default).
//       return document.documentElement.outerHTML;
//     });
//
//     // Print the HTML to standard output.
//     console.log(html);
//   }
//
//   // Make sure we quit PhantomJS, no point to keep waiting for nothing.
//   phantom.exit();
// });