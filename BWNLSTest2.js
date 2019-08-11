<!DOCTYPE html>
<html>
<head>
<title>NLS Map + Google Maps API v3</title>
<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
<style type="text/css">
html { overflow: hidden; }
body { margin: 10px; background: #f4f4f4; font-family: Trebuchet MS, Trebuchet, Arial, sans-serif; }
#map { position: absolute; width: 600px; height: 400px; }

@media screen and (max-width: 600px) {
  #map { top:0px; left:0px; width:100%; height:100%;}
}

#map { border: 1px solid #ccc; box-shadow: 0 1px 3px #CCC; background-color: #DEDCD7;}

</style>
<!--[if lte IE 6]>
<style type="text/css">
#map {
    height:expression(document.body.clientHeight-35); /* 10+10+15=35 */
    width:expression(document.body.clientWidth-20); /* 10+10=20 */
}
</style>
<![endif]-->
<script type="text/javascript" src="http://nls.tileserver.com/api.js"></script>
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyBxU0zSPn92V4KO4sj6GD9g5zfVNcArRbk" ></script>  
<script src="https://maptilercdn.s3.amazonaws.com/klokantech.js"></script>
<script type="text/javascript">

var map;

var mapMinZoom = 8;
var mapMaxZoom = 14;

var mapBounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(50.9547691, -1.2120295),
    new google.maps.LatLng(50.942607, -1.202695));

var nlsmap = new google.maps.ImageMapType({
		getTileUrl:function(tile,zoom) {
		return NLSTileUrlOS(tile.x,tile.y,zoom);
		},
	tileSize:new google.maps.Size(256,256),
	isPng:false
});

function init() {
    var opts = {
        streetViewControl: false,
        center: new google.maps.LatLng(55.96,-3.2),
        zoom: 12,
	maxZoom:mapMaxZoom,
	minZoom:mapMinZoom
    };

	var NLSAPIcredit=document.createElement('h1');
	NLSAPIcredit.style.color='#444444';
	NLSAPIcredit.style.font="10px sans-serif";
	NLSAPIcredit.style.background="rgba(255,255,255,0.5)";
	NLSAPIcredit.innerHTML='Historical maps from <a href="http://maps.nls.uk/projects/api/">NLS Maps API<\/a> ';
	var myTextDiv=document.createElement('div');
	myTextDiv.appendChild(NLSAPIcredit);

	map = new google.maps.Map(document.getElementById("map"), opts);
	map.setMapTypeId('satellite');
        map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(myTextDiv);
	map.overlayMapTypes.insertAt(0, nlsmap);
        var opacitycontrol = new klokantech.OpacityControl(map, nlsmap);
}
</script>
</head>
<body onload="init()">
<div id="map"></div>
</body>
</html>
