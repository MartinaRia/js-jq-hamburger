/*Creare un hamburger menu
DESCRIZIONE:
Creare un hamburger menu con l’utilizzo di Html, Css e JavaScript/jQuery
prendo lo zip che dopo vi allego e senza toccare l’HTML faccio funzionare l’hamburger menù;

- primo click, appare il menù;
- se cliccko che è già visibile, invece scompare.*/

//open div hamburger-menu on click of fa-bars
$('.fa-bars').click(
  function(){
    $('.hamburger-menu').toggle('slow', 'linear');
  }
)
//close div hamburger-menu on click of fa-times
$('.fa-times').click(
  function(){
    $('.hamburger-menu').toggle('fast', 'swing');
  }
)
