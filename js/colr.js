// Requires pusher.js from http://surfacecurve.org:8708/libraries/color
// Curl command:
// curl http://surfacecurve.org:8708/platform/pusher/script/pusher.color.js > js/pusher.js

// Add this to html before colr.js:
// <script src="js/pusher.js"></script>

$(window).on('mousemove', function (event) {

  var hue = Math.round((event.pageX / window.innerWidth) * 360);
  var y = event.pageY / window.innerHeight;

  var saturation = Math.round(100 * Math.cos(y * Math.PI / 2));
  var brightness = Math.round(100 * Math.sin(y * Math.PI / 2));

  var color = pusher.color('hsv', [hue, saturation, brightness]).hex6()

  $('body').css('background-color', color);
  $('.hexCode').text(color);

  if (brightness < 60) {
    $('.hexCode').css('color', 'rgba(255, 255, 255, 0.5)');
  } else {
    $('.hexCode').css('color', 'rgba(0, 0, 0, 0.5)');
  };

});