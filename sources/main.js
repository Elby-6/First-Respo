const products = document.querySelectorAll(".product")
const containProducts = document.getElementById("containerProducts");
products.forEach(el => {
    el.addEventListener("click", (e) => {
        const clicked = e.currentTarget
        // console.log(clicked)
        if (el == clicked)
        {
        
        }
    })
});
 function changeContent() {
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function () {
     if (this.readyState == 4 && this.status == 200) {
       document.getElementById("foo").innerHTML = this.responseText;
     }
   };
   xhttp.open("GET", "./content.txt", true);
     xhttp.send();
     console.log(xhttp.responseText)
 }