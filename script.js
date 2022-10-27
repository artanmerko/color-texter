var pTags = document.querySelectorAll('p')

function getColor(e) {
  console.log(e.value);
  console.log(pTags);
  for(var i=0;i<pTags.length;i++){
    pTags[i].style.color = e.value
  }
}