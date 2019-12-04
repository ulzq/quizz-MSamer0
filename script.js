
var questions = [
  {question:'Was ist 3 + 5',answer:"8"},
  {question:'Wo liegt Berlin',answer:'In Deutschland'},
  {question:'Wo liegt Tokyo',answer:'In Japan'},
  {question:'was ist 6 + 5',answer:"11"}
]

var frageDiv = document.getElementById('frage')
var punkteDiv = document.getElementById('punkte')
var neueAufgabeButton = document.getElementById('neu')
var antwortButton = document.getElementById('go')
var antwortFeld = document.getElementById('antwort')
let frage;

neueAufgabeButton.onclick = (e)=> {
  frage = questions[Math.floor(Math.random()*questions.length)];
  frageDiv.innerText = frage.question
  new Promise( (resolve,reject) => {
    setTimeout( function antwort() { 
      alert("falsch");
     }, 1000 )
  })
}

antwortButton.onclick = (e)=> {
  if ( antwortFeld.value.trim() === frage.answer ){
    punkteDiv.innerText = Number(punkteDiv.innerText) + 100
  } else {
    punkteDiv.innerText = Number(punkteDiv.innerText) - 100
  }
}

function sleep(){ return new Promise( (resolve,reject) => {
  setTimeout( ()=>{ resolve('test2') }, 1000 ) })
}