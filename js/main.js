var footer=document.getElementById('main-footer');
footer.addEventListener('mousemove', function(){
   alert('hh');
})

 window.addEventListener('scroll',(event) => { 
 console.log(Math.round(window.scrollY));
   if(Math.round(window.scrollY)==1958){
      
      let topButton=document.getElementById('top-bu');
      topButton.style.display='block';
      topButton.addEventListener('click',function(){topButton.style.display='none'})
   }
 });

