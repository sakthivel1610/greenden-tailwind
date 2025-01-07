// side nav bar and close nav bar
var sidenav=document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var closenav=document.getElementById("close__nav")
var search=document.getElementById("search")
var container=document.getElementById("container")
var productList=container.querySelectorAll("h2")

menuicon.addEventListener("click",function(){
    sidenav.style.right="0"
})
closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})

// Search funciton
search.addEventListener("keyup",function()
{
    var enteredValue=event.target.value.toUpperCase()
    for(count=0;count<productList.length;count++)
    {
        if(productList[count].textContent.toUpperCase().indexOf(enteredValue)<0)
        {
            productList[count].parentElement.style.display="none"
        }
        else
        {
            productList[count].parentElement.style.display="block"

        }
        
    }

})