/////////////////////creates a pop-up screen when button is clicked
$('.buttonSignUp').click(function(){
  alert('Thank you for signing up!');
})

/////////////////////search function
var displayWikipediaData=function(){
  var searchString = $('#searchString').val();
  //if we type dog into search form, we want value of dog to be returned
  // var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm + "&format=json&callback=?"
  var wikipediaUrl= 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+searchString+'&format=json&callback=wikiCallback';

$.ajax({
  url: wikipediaUrl,
  dataType: "jsonp",
  jsonp: "callback",
  success: function(res){
    //upon success of the search function, we want to run this function to put the wikipedia results on the screen
    console.log(res);
  }
})
return false;
}

$('#form').submit(displayWikipediaData);


//////////////////trying to create a sticky for the top of the page
$(document).ready(function(){
    $("#sticker").sticky({topSpacing:0});
  });


//////////////////when a user clicks the button with id 'trigger'
$('#trigger').click(function(){
//change the body's background to gray
$('body').css("background", "linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996)");

//fade out all the img's over 3 seconds
$('.bgImg').fadeOut(3000, function(){

  //remove imgs from page when fadeOut is done
  $('.bgImg').remove();
})
})
