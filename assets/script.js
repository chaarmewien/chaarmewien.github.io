 jQuery(document).ready(function($) {
 
    $(".scroll a, .navbar-brand, .gototop,.explore").click(function(event){   
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 600,'swing');
    $(".scroll li").removeClass('active');
    $(this).parents('li').toggleClass('active');
    });
    });






var wow = new WOW(
  {
    boxClass:     'wowload',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true        // act on asynchronously loaded content (default is true)
  }
);
wow.init();




$('.carousel').swipe( {
     swipeLeft: function() {
         $(this).carousel('next');
     },
     swipeRight: function() {
         $(this).carousel('prev');
     },
     allowPageScroll: 'vertical'
 });





// map

google.maps.event.addDomListener(window, 'load', init);
    var map;
    function init() {
        var mapOptions = {
            center: new google.maps.LatLng(48.2031102,16.34305),
            zoom: 16,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.DEFAULT,
            },
            disableDoubleClickZoom: true,
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            },
            scaleControl: true,
            scrollwheel: false,
            panControl: true,
            streetViewControl: true,
            draggable : true,
            overviewMapControl: true,
            overviewMapControlOptions: {
                opened: false,
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP

        }
        var mapElement = document.getElementById('map');
        var map = new google.maps.Map(mapElement, mapOptions);
		var title = 'Chaarme e.U.'
		var address = 'Schottenfeldgasse 61/1'
		var po = '1070 Wien'
		var mobile = '+43 (0) 660 50 60 626'
        var telephone = '+43 (0) 1 923 78 65'
		var web = 'www.chaarme.at'
		var email = 'chaarme.wien@gmail.com'
		var lat = 48.2031102
		var longitude = 16.34305
        
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(lat, longitude),
			map: map,
			title: title,
			desc: title,
			tel: telephone,
			email: email,
			web: web
            });
		if (web.substring(0, 7) != "http://") {
			link = "http://" + web;
			} 
		else {
			link = web;
		}
		bindInfoWindow(marker, map, title, address, po, mobile, telephone, email, web, link);		
            
     
 function bindInfoWindow(marker, map, title, address, po, mobile, telephone, email, web, link) {
      var infoWindowVisible = (function () {
              var currentlyVisible = false;
              return function (visible) {
                  if (visible !== undefined) {
                      currentlyVisible = visible;
                  }
                  return currentlyVisible;
               };
           }());
           iw = new google.maps.InfoWindow();

           google.maps.event.addListener(marker, 'click', function() {
               if (infoWindowVisible()) {
                   iw.close();
                   infoWindowVisible(false);
               } else {
                   var html= "<div padding:5px;width:160px;'><h4>"+title+"</h4><p>"+address+"<p><p>"+po+"<p><p>"+mobile+"<p><p>"+telephone+"<p><a href='mailto:"+email+"' >"+email+"<a><p><p><a href='"+link+"'' >"+web+"<a><p></div>";
                   iw = new google.maps.InfoWindow({content:html});
                   iw.open(map,marker);
                   infoWindowVisible(true);
               }
        });
		
        google.maps.event.addListener(iw, 'closeclick', function () {
            infoWindowVisible(false);
        });
		infoWindowVisible(true);
 }
}
