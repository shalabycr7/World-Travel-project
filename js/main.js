
 window.onscroll = function(ev) {
    
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
   // you're at the bottom of the page 
   
   let topButton=document.getElementById('top-bu');
      topButton.style.display='block';
      topButton.addEventListener('click',function(){topButton.style.display='none'})
   
} };

