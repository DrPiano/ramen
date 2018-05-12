let map;

function initMap() {
	// Map options
	let options = {
		zoom: 13,
		center: {lat: 42.3301, lng:-71.0689}
	}
	// New Map
	let map = new google.maps.Map(document.getElementById('map'), options);

	// Add marker
	let marker = new google.maps.Marker({
		position:{lat: 42.3301, lng:-71.0689},
		map: map
	});

};

$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() > 0 ){
			$(".menu").css({"opacity": 1})
		}
		else {
			$(".menu").css({"opacity": 0})
		}
	})
})

