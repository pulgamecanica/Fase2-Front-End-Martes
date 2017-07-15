$(document).ready(function() {
  $('#start').on("click", function (){
    count= 5;
    countDown();
  });

});

function countDown() {

  var interval = setInterval(function(){
    if (count > 0) {
      $("#counter").html("<h1>"+count+"</h1>");
      count--;
    }else if (count == 0) {
      $("#counter").html("<h1>"+"Go!!!"+"</h1>");
      //método que inicia juego
      moveCoin("Player1");
      moveCoin("Player2");
      clearInterval(interval);
    }
  }, 200);

}


  function moveCoin(player){
    td = $("#" + player).find('td.active');
    $(td).next().addClass('active');
    $(td).removeClass('active');
    var index = $(td).attr("id");
    console.log(index);
    if (index == 59) {

    }
    else
    {
      setTimeout(function(){
        moveCoin(player);
      }, 10);
    }
  }

  // function play2(){
  //   td = $('#Player2').find('td.active')
  //   if (td.is('#60')) {

  //   }
  //   else
  //   {
  //     $(td).removeClass('active');
  //     setTimeout(function(){
  //       $(td).next().addClass('active'); }, 5);

  //   }
  // }


  //método para obtener tecla presionada por user
  //keydown - keyup
  //Keypress









