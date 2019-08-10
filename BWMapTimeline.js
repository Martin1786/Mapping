function MapTimeline(width,minDate,maxDate,maps) {
	
	this.width = width;
	this.minDate = minDate;
	this.maxDate = maxDate;
	this.maps = maps;
	
	this.overlays = [];
	this.opacity = 0.4;
	
	var myLatLng = new google.maps.LatLng(50.954742,-1.213280);
	var myOptions = {
		zoom: 15,
		center: myLatLng,
		mapTypeId: google.maps.MapTypeId.HYBRID
	};
	this.map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

	// Returns the position in px of the given date on the timeline relative to the
	// left hand edge.
	this.dateToPixels = function (date) {
		return ((date - this.minDate) / (this.maxDate - this.minDate)) * width;
	};
	
	this.rangeMakeActive = function (element) {
		element.addClass('date_range_active').removeClass('date_range_inactive');
	};

	this.rangeMakeInactive = function(element) {
		element.addClass('date_range_inactive').removeClass('date_range_active');
	};
	
	// Populate the dividing year markers
	var content = "";
	var i; 
	for(i = minDate; i <= maxDate; i += 10 ) {
		var left = this.dateToPixels(i);
		content += '<div class="marker" style="margin-left:'+left+'px; height: ' + this.maps.length * 20 + 'px"></div>';
	};
	
	// Populate the timeline display
	for(i in this.maps) {
		var left = this.dateToPixels(this.maps[i]["early"]);
		var right = this.dateToPixels(this.maps[i]["late"]);
		content += '<div id="range'+i+'" class="date_range date_range_inactive" style="margin-left:'+left+'px; width:'+(right-left)+'px;"></div>';
	};
	$("#timeline").append(content);
	$(".carat").css('height',this.maps.length * 20 + 'px');

	var me = this;
	
	// Opacity control
	$( "#slider-opacity" ).slider({
		orientation: "vertical",
		min: 0,
		max: 100,
		values: [ this.opacity * 100 ],
		slide: function( event, ui ) {
			me.opacityUpdate(ui.values[0]/100);
		}
	});

	// Timeline control
	$( "#slider-date" ).slider({
		orientation: "horizontal",
		min: this.minDate,
		max: this.maxDate,
		values: [minDate],
		slide: function (event, ui) {
			me.dateUpdate(ui.values[0]);
		}
	});
	
	return true;
}

MapTimeline.prototype.opacityUpdate = function (opacity) {

	this.opacity = opacity;
	
	var i=0;
	for(i in this.overlays) {
		// If the overlay exists, then set update its opacity
		if(this.overlays[i] != null) {
			this.overlays[i].div_.style.opacity=(this.opacity);	
		} 
	}
}

MapTimeline.prototype.dateUpdate = function (date) {
	
		$("#datestart" ).text(date);
		var left = this.dateToPixels(date);
		$("#carat").css('margin-left', left + 'px');

		var i=0;
		for(i in this.maps) {
			// Check if the ith map is in the selected range:
			// if in range then create the overlay unless it already exists
			// it not in range then destroy the overlay if it exists
			if(this.maps[i]["early"] <= date && date <= this.maps[i]["late"]){
				if(this.overlays[i] == null) {
					var neBound = new google.maps.LatLng(this.maps[i]["ne lat"],this.maps[i]["ne long"]);
					var swBound = new google.maps.LatLng(this.maps[i]["sw lat"],this.maps[i]["sw long"]);
					var bounds = new google.maps.LatLngBounds(swBound, neBound);
					var srcImage = this.maps[i]["imgurl"];
					this.overlays[i] = new USGSOverlay(bounds, srcImage, this.map, this.opacity);
								
					this.rangeMakeActive($('#range'+i));
				}
			} else {
				if(this.overlays[i] != null) {
					this.overlays[i].setMap(null);
					this.overlays[i] = null;
					
					this.rangeMakeInactive($('#range'+i));
				}
			}
		}
};
	