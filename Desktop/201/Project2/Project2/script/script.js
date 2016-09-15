
<!-- //hide script from old browsers


$(document).ready(function(){


  $(".mediaSpace input").blur(function() {
    if( $(this).val() )
      $(this).parent().siblings().children().css("-webkit-filter","grayscale(0%)");

  });
});



function toggle_visibility(){


  var e = document.getElementById("returning");

  if (e.style.visibility == 'visible'){
    console.log("nope");
    e.style.visibility = 'hidden';

  }else{
    e.style.visibility = 'visible';
    console.log("yup");
  }
}





// end hiding script from old browsers -->
