var timeline;
$(document).ready(function () {
	timelime = new MapTimeline(700, 1860, 2011, 
		[ {
			"early" : 1964, "late" : 1965, "imgurl" : 'BWimages/1964BWMap1.jpg',
			"ne lat" : 50.95576388888889,
			"ne long" : -1.206697222222222,
			"sw lat" : 50.95136944444445,
			"sw long" : -1.218241666666667
		},
			{
			"early" : 1868, "late" : 1869, "imgurl" : 'BWimages/1868BWMap1.jpg',
			"ne lat" : 50.95593453395424,
			"ne long" : -1.208401499272319,
			"sw lat" : 50.95142053283247,
			"sw long" : -1.219863961175154
		},
			{
			"early" : 1896, "late" : 1898, "imgurl" : 'images/1896BWMap3.jpg',
			"ne lat" : 50.95477330758662,
			"ne long" : -1.20719908116136,
			"sw lat" : 50.95051545306492,
			"sw long" : -1.219981287386001
		}]
	);
});
