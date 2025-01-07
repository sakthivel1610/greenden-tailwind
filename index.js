// side nav bar and close nav bar
var sidenav=document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var closenav=document.getElementById("close__nav")

menuicon.addEventListener("click",function(){
    sidenav.style.right="0"
})
closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})