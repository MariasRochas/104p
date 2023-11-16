var y = math.floor(math.random() * 10 + 1);

var x = document.getElementById("guessField").value
  
  if (x == y) {
    alert("PARÁBENS!!!"+playername+", você acertou em"+ guess + "tentativa(s) ");
    guess= 1;
  }

  else if(x > y)
  {
    guess++;
    alert("Opa,resposta erradaa!! Tente um número menor");
  }
  else 
  {
    guess++;
    alert("Opa,resposta erradaa!! Tente um número maior");
  }

function playAgain(){
    y = math.floor(Math.random() * 10 + 1);
}