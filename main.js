var timeline;
$(document).ready(function () {
	timelime = new MapTimeline(700, 1860, 2011, 
		[ {
			"early" : 1910, "late" : 1911, "imgurl" : '1910-11Overview1.jpg',
			"ne lat" : 50.9543697963589,
			"ne long" : -1.169664258709697,
			"sw lat" : 50.92636292050577,
			"sw long" : -1.232653446924133
		},
		{
			"early" : 1964, "late" : 1966, "imgurl" : '1964-1966_1_2500.jpg',
			"ne lat" : 50.93744016689641,
			"ne long" : -1.195749768680317,
			"sw lat" : 50.93080169228159,
			"sw long" : -1.210501258995664
		} ]
	);
});
