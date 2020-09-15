   function scrollHandle(){
    var a=document.querySelector('#vega-hr');
    var scrollRef= a.offsetTop;
  
     
     if((window.pageYOffset + window.innerHeight) >= scrollRef){
        console.log(scrollRef);
     }
    }