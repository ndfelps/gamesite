$(document).ready(function() {
	var routerConfig = {
		routes: {
			"": 'nav5',
			'home': 'nav1',
			'play': 'nav2',
			'leaderboard': 'nav3',
			'settings': 'nav4'
		},
		nav1: function() {
			$('.page').hide();
			$('#b').show();
		},
		nav2: function() {
			$('.page').hide();
			$('#c').show();
		},
		nav3: function() {
			$('.page').hide();
			$('#d').show();
		},
		nav4: function() {
			$('.page').hide();
			$('#e').show();
		},
		nav5: function() {
			$('.page').hide();
			$('#a').show();
			setTimeout(function() {$('.page').hide();
			$('#b').show();}, 4000)
		}
	};

	var app = Backbone.Router.extend(routerConfig);
	var myRouter = new app();

	Backbone.history.start();
})