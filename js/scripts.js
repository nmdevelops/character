//Back end logic
var conditional = function(q1, q2, q3) {
  if (q1 === "red" && q2 === "flying") {
    alert("You are Superman");
  } else if (q1 === "red" && q2 === "superStrength") {
    alert("You are the Hulk")
  }

  else if (q1 === "black" && q3 === "300"  && q2 !== "flying") {
    alert("You are Batman")
  }
  else if (q1 === "black" && q2 === "flying") {
    alert("You are Superman")
  }
  else if (q1 === "blond" && q2 === "superStrength" && q2 !== "flying") {
    alert("You are Thor")
  }

  else {
    alert("You are Mystique")
  }
}
// Front end
$(document).ready (function () {
  $("#quiz form").submit(function (event) {
    var question1 = $("input:radio[name=question1]:checked").val();
    var question2 = $("input:radio[name=question2]:checked").val();
    var question3 = $("input:radio[name=question3]:checked").val();
    conditional(question1, question2, question3);
    event.preventDefault();
  });
});
