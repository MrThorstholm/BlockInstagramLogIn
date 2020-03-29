document.body.addEventListener('DOMNodeInserted', OnNodeInserted);

function OnNodeInserted () {

  var element = document.querySelector("[role='presentation']");
  if (element){
    element.remove();
  }

  if (document.body.style.overflow === 'hidden') {
    document.body.style.overflow = 'visible'
  }
};