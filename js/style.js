   function scrollHandle(){
    var a=document.querySelector('#vega-hr');
    var scrollRef= a.offsetTop;
  
     
     if((window.pageYOffset + window.innerHeight) >= scrollRef){
        console.log(scrollRef);
     }
    }

    var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


var modal = document.getElementById("myModal1");

var btn = document.getElementById("contactForm");

var span = document.getElementsByClassName("close1")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}