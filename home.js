'use strict'   

// var json = require('./feature.json'); 

$(document).ready(function() {

	$('.eachCard').append($('<img/>')
	    .attr("src","http://www.wallis.co.uk/wcsstore/ConsumerDirectStorefrontAssetStore/images/colors/color8/cms/pages/json/json-0000125785/images/slide-1.jpg")
	    .addClass("image")
	    
	);

	$('.eachCard').append($("<span/>")
	      .text("Trend")
	);

	$('.eachCard').append($("<h3/>")
	      .text("Wallis")
    );

    $('.eachCard').append($("<p/>")
	      .text("Lorem ipsum dolor sit amet, consectetur adipisicing elit, se")
    );
  
});


 // $.get('feature.json', function(data) {
 //   console.log( $.parseJSON( data ) );
 //   $.parseJSON( data ).forEach(function(item){
 //   		$('.eachCard').append($('<img/>')
	//     .attr("src",item.imageUrl)
	//     .addClass("image")
	    
	// );

	// $('.eachCard').append($("<span/>")
	//       .text(item.category)
	// );

	// $('.eachCard').append($("<h3/>")
	//       .text(item.title)
 //    );

 //    $('.eachCard').append($("<p/>")
	//       .text(item.description)
 //    );

 //   })


 // });

//  $.getJSON("feature.json", function(json) {
//     console.log(json); // this will show the info it in firebug console
// });