var active=3;
var mncircles=document.querySelectorAll(".mncircle");
gsap.to(mncircles[active-1],{
opacity:.5
})
mncircles.forEach(function(val){
    val.addEventListner("click",function(){
   gsap.to("#circle",{
    rotate:(3-(index+1))*10
      
   })
   greyout();
   gsap.to(this,{
    opacity:.5
   })
    })
})
function greyout(){
    gsap.to(
        mncircles,{
          opacity:.08; 
        }
    )
}

gsap.to("#circle",
{
    rotate:0,
    ease: Expo.easeInOut,
    duration:2
}


)