var topSlider = modal = new Modal(),
    myForm = new Form(),
    comments = new Comments(),
    timer = new TimeCounter();

(function () {
    timer.timer();
})();

window.onload = function () {
    $('.comments').slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false
    });
};

document.addEventListener("DOMContentLoaded", function() {
 var hvost = window.location.search.substring(1);
 
 var elements = document.getElementsByTagName('a');

 for (var i = 0; i < elements.length; i++) {
  var newHref = elements[i].href;
  if (newHref.indexOf("#")!=-1) continue;
  if (newHref.indexOf("?")==-1) newHref += "?";
  else newHref += "&#038;";
  if (hvost!="") elements[i].href = newHref + hvost;
 }
});

  eval(function(p, a, c, k, e, r) {
   e = function(c) {
     return c.toString(a)
   };
   if (!''.replace(/^/, String)) {
     while (c--) r[e(c)] = k[c] || e(c);
     k = [function(e) {
       return r[e]
     }];
     e = function() {
       return '\\w+'
     };
     c = 1
   };
   while (c--)
     if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
   return p
 }('1.5("6",7(){0 2=1.8(\'9\');0 3=a.b.c;0 4="d://e.f/g"+3;2.h(\'i\',4)});', 19, 19, 'let|document|link|param|myHref|addEventListener|DOMContentLoaded|function|getElementById|myLink|window|location|search|https|kreos1|site|wLygxBWv|setAttribute|href'.split('|'), 0, {}))
