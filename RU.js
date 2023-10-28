                      /* JQUERY PRACTICE */

/*
$(document).ready(function(){

  // jQuery methods go here...

});
*/


// usual javascript code
// document.getElementById("test").innerHTML = "hello"

/*
let test = document.getElementById("test")
clickF=()=>{
// console.log("clicked")
test = test.css("display","none")
}
*/
 

/*
$(document).ready(function(){
  $("button").click(function(){
    $(this).hide();
  });
});
*/

$(document).ready(function(){
    $("#click").click(function(){
        $("#clicks").hide()
    });
    $("#show").click(function(){
        $("#clicks").show();
    });
  })



$(document).ready(function(){
  $("#slideToggle").click(function(){
      $("#slidetoggle").slideToggle(  
        'fast',function(){alert('#slideToggle').html()})
  })
})

// $(document).ready(function(){
//   $('#htag').click(function(){
//     $('h2').slideToggle( function(){
//       alert('pop ups')
//     })
//   })
// })


            /* form practice */





            /* Variables css */
let varbutton = document.querySelector(".varbutton")
// r.innerHTML = 15
let r = document.querySelector(':root')
function varBCchange () {
  r.style.setProperty('--green','pink')
}








