$(document).ready(function() {
  count = 5
  r1 = 0;
  r2 = 0;
  $('#start').on("click", function (){
    td1 = $("#" + "Player1").find('td.active');
    td2 = $("#" + "Player2").find('td.active');
    td1.removeClass('active')
    td2.removeClass('active')
    $("#" + "Player1").find('td.first').addClass('active');
    $("#" + "Player2").find('td.first').addClass('active');
    $("#winner").html(""); 
    key1 = false;
    key2 = false;
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
      //metodo que reinicia el juego1
      $(document).bind('keydown', pressKey);
      moveCoin("Player1");
      moveCoin("Player2");
      clearInterval(interval);
    }
  }, 100);
}
function moveCoin(player){
  td = $("#" + player).find('td.active');
  $(td).removeClass('active');
  $(td).next().addClass('active');
  var index = $(td).attr("id");
  if (player == "Player1" && key1 == true || index == 59) {
    console.log("termino jugador 1");
    r1 = 50 - index;
    if (key2 == true || index == 59) 
      result();
  }
  else if (player == "Player2" && key2 == true || index == 59) {
    console.log("termino jugador 2");
    r2 = 50 - index;
    if (key1 == true || index == 59) 
      result();   
  }
  else
  {
    setTimeout(function(){
      moveCoin(player);
    }, 50);
  }
}
function pressKey(e){
    if(e.keyCode == 65)
      key1 = true;
    else if(e.keyCode == 76)
      key2 = true;
}
function result(){
  result1 = Math.abs(r1);
  result2 = Math.abs(r2);
  if (result1 < result2)
    $("#winner").html("<h1>"+"The Winner is Player1"+"</h1>"); 
  else if (result1 > result2)
    $("#winner").html("<h1>"+"The Winner is Player2"+"</h1>"); 
  else 
    $("#winner").html("<h1>"+"It's a TIE!"+"</h1>"); 
}
//función resultado
//recibir juagador e índice
//para calcular jugador ganador
//hay que considerar dos escenarios
//escenario valido:
//los dos se encuentran abajo o igual que la meta
//escenario inválido:
//cuando uno u otro jugaro está arriba de la meta
//calcular quien es más alto










