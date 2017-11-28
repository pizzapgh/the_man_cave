function initMap() {
			var myLatLng = {lat: 40.496685, lng: -80.057522};

			var map = new google.maps.Map(document.getElementById('map'), {
				zoom: 17,
				center: myLatLng
			});

			var marker = new google.maps.Marker({
				position: myLatLng,
				map: map,
				title: 'Hello World!'
			});
		}


		$(document).ready(function(){

		    $('.first').waypoint(function() {
		      $('.first').addClass('animated fadeInUp');
		    }, {
		      offset: '98%'
		    });
		    $('.second').waypoint(function() {
		      $('.second').addClass('animated fadeInUp');
		    }, {
		      offset: '98%'
		    });
		    $('.third').waypoint(function() {
		      $('.third').addClass('animated fadeInUp');
		    }, {
		      offset: '98%'
		    });
				$('.fourth').waypoint(function() {
				 $('.fourth').addClass('animated fadeInUp');
			 }, {
				 offset: '98%'
			 });

		});
