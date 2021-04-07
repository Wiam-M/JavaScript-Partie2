
// oninput : This event is sent when a user enters text in a textbox .
// This event is only called when the text displayed would change, thus it is not called when the user presses non-displayable keys. 
//onkeyup : The keyup event is raised when the user releases a key that's been pressed.
//on peut utiliser oniput et onkeyup
//Par exemple la touche ESC (escape) ne devrait pas te permettre d'ouvrir ton alert sous l'event oninput
function displayKey() {
  var x = document.getElementById("nom").value;
    alert(x);
  }
 