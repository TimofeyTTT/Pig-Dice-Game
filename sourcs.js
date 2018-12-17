$(document).ready(function() {

  function roll() {
    return Math.floor(6 * Math.random()) + 1;
  };

  var turn1Total = 0;
  var turn2Total = 0;
  var myTurn1 = 0;
  var myTurn2 = 0;

  $("#firstPlayer").click(function firstplayerRol() {
    myTurn1 = roll();
    $("#roundRoll1").val(myTurn1);
    $("#roundRoll2").val("");
    if (myTurn1 === 1) {
      alert("rolled 1 your score is 0, secondplayer turn.")
    } else {
      turn1Total += myTurn1;
      $("#totalScore1").val(turn1Total);
    }
  });
  $("#secondPlayer").click(function secondplayerRol() {
    myTurn2 = roll();
    $("#roundRoll2").val(myTurn2);
    $("#roundRoll1").val("");
    if (myTurn2 === 1) {
      alert("rolled 1 your score is 0, first player turn.")
    } else {
      turn2Total += myTurn2;
      $("#totalScore2").val(turn2Total);
    }
  });
});

